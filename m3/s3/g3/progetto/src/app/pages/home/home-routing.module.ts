import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo', loadChildren: () => import('./../todo/todo.module').then(m => m.TodoModule) },
  { path: 'completed', loadChildren: () => import('./../completed/completed.module').then(m => m.CompletedModule) },
  { path: 'register', loadChildren: () => import('./../auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('./../auth/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
