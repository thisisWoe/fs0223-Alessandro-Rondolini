import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  singleTodo:Todo = new Todo('',false);

  constructor(private todoSvc: TodosService){}

  ngOnInit(){
    this.getTodos();
  }
  getTodos() {
    this.todoSvc.getTodos().then(todosResponse => {
      this.todos = todosResponse;
    })
  }
  deleteTodo(id? :number){
    this.todoSvc.deleteTodo(id)
    .then(res => {
      this.getTodos();
    })
  }
  createTodo(){
    this.todoSvc.addTodo(this.singleTodo)
    .then(res => console.log(res));
  }
}
