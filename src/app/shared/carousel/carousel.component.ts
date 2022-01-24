import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  providers: [],
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor() {
  }

  images = ["/assets/img/judoBanner1.jpg","/assets/img/judoBanner2.jpg","/assets/img/judoBanner2.jpg"];
}
