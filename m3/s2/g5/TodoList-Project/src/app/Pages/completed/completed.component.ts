import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  completedTodos: Todo[] = [];

  constructor(private todoSvc: TodosService){}

  ngOnInit(){
    this.getTodos();
  }
  getTodos() {
    this.todoSvc.getTodos().then(todosResponse => {
      todosResponse.forEach((falseBoolTodo) => {
        if(falseBoolTodo.completed === true){
          this.completedTodos.push(falseBoolTodo);
        }
      })
    })
  }
}
