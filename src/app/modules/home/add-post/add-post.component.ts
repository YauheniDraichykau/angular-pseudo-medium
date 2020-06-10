import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  title: string = '';
  text: string = '';

  constructor(private http: HttpClient) {}

  addPost() {
    this.http.post('', {
      title: this.title,
      text: this.text,
    });

    this.title = '';
    this.text = '';
  }

  ngOnInit(): void {}
}
