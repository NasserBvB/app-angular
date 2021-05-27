import { IPost } from './../models/post.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get<IPost[]>(this.url + 'posts');
  }
}
