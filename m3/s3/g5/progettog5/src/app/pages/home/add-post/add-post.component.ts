import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { IPost } from '../interfaces/ipost';
import { Router } from '@angular/router';
import { IAuthData } from '../../auth/interfaces/iauth-data';
import { IuserData } from '../../auth/interfaces/iuser-data';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1000ms', style({ opacity: 0 })),
      ]),
    ])
  ]
})
export class AddPostComponent {

  nowTime: string | null = null;

  newPost: IPost = {
    id: 0,
    title: '',
    image: '',
    createdBy_id: 0,
    createdBy_name: '',
    createdAt: <string>this.nowTime,
  }

  userData:IuserData = {
    id: 0,
    email: '',
    name: '',
    surname: ''
  }

  userLogged: IAuthData = {
    accessToken: '',
    user: this.userData,
  }

  public getSrc: string | null = null;
  public getTitle: string | null = null;

  constructor(private HomeService: HomeService, private router: Router){}

  ngOnInit(){
    this.catchUser();
    this.nowTime = new Date().toString();
  }

  catchUser(){
    this.HomeService.findLoggedUser();
    this.HomeService.sharedProfile.subscribe(myUser => {
      if(myUser){
        this.userLogged = myUser;
      }
    })
  }

  createMyPost(newPost:IPost){
    this.HomeService.findLoggedUser();
    newPost.createdAt = <string>this.nowTime;
    newPost.createdBy_id = this.userLogged.user.id
    newPost.createdBy_name = this.userLogged.user.name + " " + this.userLogged.user.surname;
    this.HomeService.addPost(newPost)
    .subscribe(data => {
      console.log("🚀 ~ file: add-post.component.ts:27 ~ AddPostComponent ~ createMyPost ~ data:", data)
      this.router.navigate(['/']);
    })
  }

  handleImageInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const newValue = inputElement.value;
    console.log(this.getSrc);
    this.getSrc = newValue;
  }

  handleTitleInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const newValue = inputElement.value;
    console.log(this.getTitle);
    this.getTitle = newValue;
  }
}
