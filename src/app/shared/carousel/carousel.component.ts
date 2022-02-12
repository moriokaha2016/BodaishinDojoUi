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

  images = [
    "/assets/img/hon_kesa_gatame.webp",
    "/assets/img/tomoe_nage.webp",
    "/assets/img/kata_guruma.webp",
  ];
}
