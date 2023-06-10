import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IRegisterData } from 'src/app/pages/auth/interfaces/iregister-data';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
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
export class RegisterComponent implements OnInit {
  newUserData:IRegisterData = {
    email: '',
    password: '',
    name: '',
    surname: ''
  };

  showError:boolean = false;
  textError:string = '';

  formRegister!: FormGroup;

  constructor(private AuthService:AuthService, private router: Router, private fb: FormBuilder){}


  ngOnInit(): void {
    this.formRegister = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        name: ['', Validators.required],
        surname: ['', Validators.required]
    });
  }

  register(){
    this.newUserData = this.formRegister.value;
    this.AuthService.signUp(this.newUserData)
    .subscribe(res => {
      console.log("🚀 ~ file: register.component.ts:24 ~ RegisterComponent ~ register ~ res:", res)
      this.router.navigate(['./auth/login']);
    })
    this.handleErrorMessage();
  }

  handleErrorMessage() {
    this.AuthService.error$.subscribe(error => {
      this.showError = error;
    });
    this.AuthService.errorText$.subscribe(text => {
      this.textError = text;
    })
  }

}
