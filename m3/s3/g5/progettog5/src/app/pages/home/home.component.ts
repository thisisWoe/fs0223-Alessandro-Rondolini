import { AuthService } from './../auth/auth.service';
import { IAuthData } from 'src/app/pages/auth/interfaces/iauth-data';
import { catchError, tap } from 'rxjs';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { IPost } from './interfaces/ipost';
/* import { IAuthData } from '../auth/interfaces/iauth-data'; */
import { IuserData } from '../auth/interfaces/iuser-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  allDisplayablePosts: IPost[] = [];
  post: IPost = {
    id: 0,
    title: '',
    image: '',
    createdBy_id: 0,
    createdBy_name: '',
    createdAt: '',
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

  constructor(private HomeService: HomeService, private AuthService: AuthService, private router: Router){}
  ngOnInit(){
      this.getAllPostsHome();
      this.catchUser();
  }

  getAllPostsHome(){
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

  catchUser(){
    this.HomeService.findLoggedUser();
    this.HomeService.sharedProfile.subscribe(myUser => {
      if(myUser){
        this.userLogged = myUser;
      }
    })
  }

  logout(){
    this.AuthService.logout();
    this.router.navigate(['../auth']);
  }
}


