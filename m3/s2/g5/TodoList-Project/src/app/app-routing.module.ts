import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './Pages/todo/todo.component';
import { CompletedComponent } from './Pages/completed/completed.component';

const routes: Routes = [
  {
    path:'',
    component: TodoComponent
  },
  {
    path:'menu',
    component: CompletedComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
