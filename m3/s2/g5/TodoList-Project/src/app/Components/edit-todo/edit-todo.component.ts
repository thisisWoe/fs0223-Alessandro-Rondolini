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
    'display-n': true,
  }
  /* @Input() transferData!: string; */
  /* @ViewChild('editContainer', { read: ElementRef }) editContainer!: ElementRef; */

  constructor(private todoSvc: TodosService, private router: ActivatedRoute){}

  /* ngOnInit(){
    this.myClassesEdit['display-n'] = false;
    this.router.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
        this.todoSvc.getSingleTodo(+id)
      .then(res => {
        this.singleTodo = res;
      })
      }
    })
  } */

  @HostListener('click') visualizeFormEdit() {
    this.myClassesEdit['display-n'] = false;
    /* this.router.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
        this.todoSvc.getSingleTodo(+id)
      .then(res => {
        this.singleTodo = res;
      })
      }
    })
    console.log(this.transferData); */
  }
}
