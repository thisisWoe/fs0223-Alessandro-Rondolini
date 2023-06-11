import { IAuthData } from '../../auth/interfaces/iauth-data';
import { IuserData } from '../../auth/interfaces/iuser-data';
import { IPost } from '../interfaces/ipost';
import { HomeService } from './../home.service';
import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
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
export class MyProfileComponent {

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

  allDisplayablePosts: IPost[] = [];
  post: IPost = {
    id: 0,
    title: '',
    image: '',
    createdBy_id: 0,
    createdBy_name: '',
    createdAt: '',
  }

  constructor(private HomeService: HomeService, private AuthService: AuthService, private router: Router){}

  ngOnInit(){
    this.getAllMyPosts()
    this.catchUser();
  }

  catchUser(){
    this.HomeService.findLoggedUser();
    this.HomeService.sharedProfile.subscribe(myUser => {
      if(myUser){
        this.userLogged = myUser;
      }
    })
  }

  getAllMyPosts(){
    this.HomeService.getAllPosts().subscribe(
      (posts) => {
        this.allDisplayablePosts = posts;
        console.log('Post recuperati', posts);
      },
      (error) => {
        console.log('errore nel recuperare i post', error);
      }
    );
  }

  deleteTargetPost(id:number){
    this.HomeService.deletePost(id).subscribe(data=>{
      let index = this.allDisplayablePosts.findIndex(p => p.id == id)
      this.allDisplayablePosts.splice(index,1)
    })
  }

  logout(){
    this.AuthService.logout();
    this.router.navigate(['../auth']);
  }
}
