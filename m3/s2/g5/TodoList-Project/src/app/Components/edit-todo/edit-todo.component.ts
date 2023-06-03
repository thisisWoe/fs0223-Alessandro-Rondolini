import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Todo } from 'src/app/Models/todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent {
  singleTodo:Todo = new Todo('',false);
  myClassesEdit = {
    'form-container': true,
    'display-n': false,
  }

  constructor(private todoSvc: TodosService, private router: ActivatedRoute){}
  markAsCompleted(){
    this.router.params.subscribe((params: any)=> {
      const todoId = params.id;
      this.todoSvc.getSingleTodo(todoId)
      .then(res => {
        this.singleTodo = res;
        this.singleTodo.completed = true;
        this.todoSvc.editTodo(this.singleTodo)
        this.todoSvc.getTodos();
      })
    })
  }

  updateTodo(){
    this.todoSvc.editTodo(this.singleTodo)
    .then(res => console.log(res));
  }
}
