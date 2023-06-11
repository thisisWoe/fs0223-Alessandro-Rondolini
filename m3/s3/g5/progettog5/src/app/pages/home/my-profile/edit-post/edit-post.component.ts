import { HomeService } from './../../home.service';
import { Component, OnInit } from '@angular/core';
import { IPost } from '../../interfaces/ipost';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1000ms', style({ opacity: 0 })),
      ]),
    ])
  ]
})
export class EditPostComponent implements OnInit {

  post: IPost = {
    title: '',
    image: '',
    id: 0,
    createdBy_id: 0,
    createdBy_name: '',
    createdAt: ''
  }

  constructor(private HomeService: HomeService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.findPost();
  }

  findPost(){
    this.route.params.subscribe((params:any) => {
      this.HomeService.getSinglePost(params.id).subscribe(post => {
        this.post = post;
      })
    })
  }

  editMyPost(){
    this.HomeService.editPost(this.post).subscribe((posts) => {
      this.router.navigate(['/'])
    })
  }
}
