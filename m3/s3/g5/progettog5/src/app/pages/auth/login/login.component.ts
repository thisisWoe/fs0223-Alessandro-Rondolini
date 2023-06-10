import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginData } from 'src/app/pages/auth/interfaces/ilogin-data';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 })),
      ]),
    ])
  ]
})
export class LoginComponent implements OnInit {
  userData:ILoginData = {
    email: '',
    password: ''
  }

  showError:boolean = false;
  textError:string = '';

  formLogin!: FormGroup;
  constructor(private AuthService: AuthService, private router: Router, private fb: FormBuilder){}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
    });
  }

  login(){
    this.userData = this.formLogin.value;
    this.AuthService.signIn(this.userData)
    .subscribe(data => {
      console.log('Sei Loggato')
      this.router.navigate(['/']);
    })
    this.handleErrorMessage()
  }

  handleErrorMessage(){
    this.AuthService.error$.subscribe(error => {
      this.showError = error;
    });
    this.AuthService.errorText$.subscribe(text => {
      this.textError = text;
    })
  }
}
