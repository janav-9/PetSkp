import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  columns:number = 4;
  constructor() { }
  public cols: number;

  ngOnInit() {
    this.cols = (window.innerWidth <= 1200) ? 1 : 2;

}

onResize(event) {
  this.cols = (event.target.innerWidth <= 1200) ? 1 : 2;
}
}
