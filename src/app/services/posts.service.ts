import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Post {
  _id: string;
  author: {
    _id: string;
    email: String;
    username: String;
    password: String;
    avatar: String;
    following: String[];
    followers: String[];
  };
  title: String;
  text: String;
  likes: Number;
  createdAt?: String | Date;
  updatedAt?: String | Date;
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: Post[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get<Post[]>('http://localhost:5000/post/getAll')
      .subscribe((res) => (this.posts = res));
  }
}
