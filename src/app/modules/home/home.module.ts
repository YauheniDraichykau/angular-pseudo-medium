import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SubHeaderComponent } from './sub-header/sub-header.component';
import { HomeComponent } from './home.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostComponent } from './post/post.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { RouterModule } from '@angular/router';
import { ArticlePageComponent } from './article-page/article-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    SubHeaderComponent,
    HomeComponent,
    AllPostsComponent,
    PostComponent,
    UserPostsComponent,
    AddPostComponent,
    ArticlePageComponent,
    HomePageComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule],
  exports: [HomeComponent],
  providers: [],
})
export class HomeModule {}
