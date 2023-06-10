import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';



/* import { AddPostComponent } from './add-post/add-post.component';
import { EditProfileComponent } from './my-profile/edit-profile/edit-profile.component'; */


@NgModule({
  declarations: [
    HomeComponent,
/*     AddPostComponent,
    EditProfileComponent */
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ScrollingModule,
    MatTooltipModule,
    MatButtonModule,
    DragDropModule,
    MatIconModule,
    MatCardModule
  ]
})
export class HomeModule { }
