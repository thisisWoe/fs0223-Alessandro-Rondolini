import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IPost } from './interfaces/ipost';
import { IAuthData } from '../auth/interfaces/iauth-data';
import { IuserData } from '../auth/interfaces/iuser-data';

@Injectable({
  providedIn: 'root'
})
export class HomeService{

  postsUrl:string = environment.postsUrl;
  public sharedProfile = new BehaviorSubject<null | IAuthData>(null);


  constructor(private http: HttpClient) {}


  getAllPosts(){
    return this.http.get<IPost[]>(this.postsUrl);
  }

  getSinglePost(id:number){
    return this.http.get<IPost>(this.postsUrl + '/' + id);
  }

  addPost(post:IPost){
    return this.http.post<IPost>(this.postsUrl, post);
  }

  editPost(post:Partial<IPost>){
    return this.http.put(this.postsUrl + '/' + post.id, post);
  }

  deletePost(id:number){
    return this.http.delete(this.postsUrl + '/' + id);
  }

  findLoggedUser(){
    const user = <string>localStorage.getItem('user')
    const userObj = JSON.parse(user);
    this.sharedProfile.next(userObj)
  }
}
