import { HomeService } from './../../pages/home/home.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { IAuthData } from 'src/app/pages/auth/interfaces/iauth-data';
import { IuserData } from 'src/app/pages/auth/interfaces/iuser-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isInHomePage:boolean = false;
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
  userName:string | null = null;

  constructor(private router: Router, private HomeService: HomeService){
  }
  ngOnInit() {
    this.catchUser();
    console.log(this.userName);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.catchUser();
        this.userName = this.userLogged.user.name;
        console.log(this.userName);
        if(this.userName !== null){
          this.isInHomePage = true;
        } else {
          this.isInHomePage = false;
        }
      }
    });
  }

  catchUser(){
    this.HomeService.findLoggedUser();
    this.HomeService.sharedProfile.subscribe(myUser => {
      if(myUser){
        this.userLogged = myUser;
      }
    })
  }
}
