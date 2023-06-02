import { Injectable } from '@angular/core';
import { Todo } from './Models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiLink: string = 'http://localhost:3000/todos';

  constructor() { }

  getTodos():Promise<Todo[]>{
    return fetch(this.apiLink).then(res => res.json());
  }




}
