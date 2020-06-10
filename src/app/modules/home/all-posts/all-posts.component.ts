import { Component, OnInit, DoCheck, AfterContentChecked } from '@angular/core';
import { Post, PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss'],
})
export class AllPostsComponent implements OnInit {
  posts: Post[] = this.PostsService.posts;

  constructor(private PostsService: PostsService) {}

  ngOnInit(): void {}
}
