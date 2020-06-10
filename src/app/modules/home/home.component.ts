import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  postsType = 'globalFeed';

  switchComponent(type: string) {
    this.postsType = type;
  }

  ngOnInit(): void {}
}
