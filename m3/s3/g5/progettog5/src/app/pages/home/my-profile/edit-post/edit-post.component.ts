import { HomeService } from './../../home.service';
import { Component, OnInit } from '@angular/core';
import { IPost } from '../../interfaces/ipost';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  post: IPost = {
    id: 0,
    title: '',
    image: '',
    createdBy_id: 0,
    createdBy_name: '',
    createdAt: '',
  }
  constructor(private HomeService: HomeService, private route: ActivatedRoute, private router: Router){}
  ngOnInit(){
    this.findPost()
  }
  findPost(){
    this.route.params.subscribe((params:any) => {
      this.HomeService.getSinglePost(params.id).subscribe(post => {
        this.post = <IPost>post;
      })
    })
  }
  editMyPost(){
    this.HomeService.editPost(this.post).subscribe((posts) => {
      this.router.navigate(['/'])
    })
  }

}
