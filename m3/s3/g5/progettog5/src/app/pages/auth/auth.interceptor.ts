import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, switchMap, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private AuthService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.AuthService.user$.pipe(take(1), switchMap(user => {
      console.log(user);
      if(!user){
        return next.handle(request)
      }
      const newReq = request.clone({
        headers:request.headers.append('Authorization',`Bearer ${user.accessToken}`)
      })
      return next.handle(newReq)
      })
      );
  }
}
