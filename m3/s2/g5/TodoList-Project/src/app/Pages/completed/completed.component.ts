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
    this.getTrueTodos();
  }
  getTrueTodos() {
    this.todoSvc.getTodos().then(todosResponse => {
      const onlyTrueTodos = todosResponse.filter(todo => todo.completed === true);
      this.completedTodos = onlyTrueTodos;
      console.log("🚀 ~ file: completed.component.ts:22 ~ CompletedComponent ~ this.todoSvc.getTodos ~ this.completedTodos:", this.completedTodos)
    })
  }
  markAsNotCompleted(id? : number){
    this.todoSvc.getSingleTodo(id!)
      .then(res => {
        console.log(res);
        res.completed = false;
        this.todoSvc.editTodo(res)
        this.getTrueTodos()
      })
  }



}
