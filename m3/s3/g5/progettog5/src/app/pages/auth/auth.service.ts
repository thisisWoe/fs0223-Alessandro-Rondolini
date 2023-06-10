import { environment } from 'src/environments/environment.development';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';
import { IAuthData } from 'src/app/pages/auth/interfaces/iauth-data';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IRegisterData } from 'src/app/pages/auth/interfaces/iregister-data';
import { ILoginData } from 'src/app/pages/auth/interfaces/ilogin-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper:JwtHelperService = new JwtHelperService();
  registerUrl:string = environment.url + '/register';
  loginUrl:string = environment.url + '/login';

  private authSubject = new BehaviorSubject<null | IAuthData>(null)
  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(user => Boolean(user)));

  autoLogTimer: any;

  private errorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public error$ = this.errorSubject.asObservable();
  private errorTextSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public errorText$ = this.errorTextSubject.asObservable();


  constructor(private http: HttpClient, private router: Router) {this.restoreUser(), this.errorSubject.next(false)}

  signUp(data:IRegisterData){
    return this.http.post<IAuthData>(this.registerUrl, data).pipe(
      catchError(error => {
        /* console.log("🚀 ~ file: auth.service.ts:45 ~ AuthService ~ signUp ~ error:", error) */
        const errorText = this.errors(error);
        this.errorSubject.next(true);
        this.errorTextSubject.next(errorText);
        return throwError(error);
      })
    );
  }
    /* return this.http.post<IAuthData>(this.registerUrl,data) */

  signIn(data:ILoginData){
    return this.http.post<IAuthData>(this.loginUrl,data)
    .pipe(tap(data =>{
      this.authSubject.next(data);
      localStorage.setItem('user', JSON.stringify(data));

      const expDate = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date;
      this.autoLogout(expDate);
    }))
    .pipe(catchError(error => {
      const errorText = this.errors(error);
      this.errorSubject.next(true);
      this.errorTextSubject.next(errorText);
      return throwError(error);
    }))
  }

  restoreUser(){
    const userJson = localStorage.getItem('user');
    if(!userJson){
      return
    }

    const user: IAuthData = JSON.parse(userJson);
    if(this.jwtHelper.isTokenExpired(user.accessToken)){
      return;
    }

    this.authSubject.next(user);
    console.log('sei loggato')
  }

  logout(){
    this.authSubject.next(null);
    localStorage.removeItem('user');
  }

  autoLogout(expDate:Date){
    const expMs = expDate.getTime() - new Date().getTime()
    this.autoLogTimer = setTimeout(() => {
      this.logout();
    }, expMs)
  }

  errors(err: any) {
    switch (err.error) {
        case "Email and password are required":
            return 'Email and password are required'
            break;
        case "Email already exists":
            return 'Email already exists'
            break;
        case 'Email format is invalid':
            return 'Email format is invalid'
            break;
        case 'Cannot find user':
            return 'Cannot find user'
            break;
        case 'Incorrect password':
            return 'Incorrect password or email'
            break;
            default:
        return 'Errore'
            break;
    }
  }
}
