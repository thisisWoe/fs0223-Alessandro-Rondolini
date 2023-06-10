import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile.component';

const routes: Routes = [
  { path: '', component: MyProfileComponent },
  { path: 'editPost/:id', loadChildren: () => import('./edit-post/edit-post.module').then(m => m.EditPostModule) },
  { path: 'editProfile', loadChildren: () => import('./edit-profile/edit-profile.module').then(m => m.EditProfileModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRoutingModule { }
