import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  /* { path: 'todo', loadChildren: () => import('./pages/todo/todo.module').then(m => m.TodoModule) },
  { path: 'completed', loadChildren: () => import('./pages/completed/completed.module').then(m => m.CompletedModule) }, */
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },

  { path: 'todo', loadChildren: () => import('./pages/todo/todo.module').then(m => m.TodoModule) },

  { path: 'completed', loadChildren: () => import('./pages/completed/completed.module').then(m => m.CompletedModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
