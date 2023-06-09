import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'myProfile', loadChildren: () => import('./my-profile/my-profile.module').then(m => m.MyProfileModule) },
  { path: 'addPost', loadChildren: () => import('./add-post/add-post.module').then(m => m.AddPostModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
