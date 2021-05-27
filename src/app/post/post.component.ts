import { IPost } from './../models/post.model';
import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: IPost[]=[];

  constructor(private postsService : PostsService) { }

  ngOnInit(): void {
    this.getPosts();
    console.log(this.posts);
  }

  getPosts(){
    this.postsService.getPosts().subscribe((data: IPost[])=>{
      data.forEach(element => {
        this.posts.push(element);
      });
    })
  }

}
