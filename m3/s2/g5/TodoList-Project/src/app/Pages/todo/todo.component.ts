import { Router, RouterModule } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { EditTodoComponent } from 'src/app/Components/edit-todo/edit-todo.component';
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
  /* @ViewChild(EditTodoComponent) childComponent!: EditTodoComponent; */

  constructor(private todoSvc: TodosService){}

  ngOnInit(){
    this.getTodos();
  }
  getTodos() {
    this.todoSvc.getTodos().then(todosResponse => {
      const onlyFalseTodos = todosResponse.filter(todo => todo.completed === false);
      this.todos = onlyFalseTodos;
      console.log("🚀 ~ file: todo.component.ts:26 ~ this.todoSvc.getTodos ~ this.todos:", this.todos)
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
  handleTodoCreated() {
    this.getTodos();
  }
  markAsCompleted(id? : number){
    this.todoSvc.getSingleTodo(id!)
      .then(res => {
        console.log(res);
        res.completed = true;
        this.todoSvc.editTodo(res)
        this.getTodos()
      })
  }
}
