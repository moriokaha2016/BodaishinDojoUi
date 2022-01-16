import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  providers: [NgbCarouselConfig],
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  ngOnInit(): void {
  }

  images = ["assets/img/judoBanner1.jpg","assets/img/judoBanner2.jpg","assets/img/judoBanner2.jpg"];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
    config.animation = true;
  }
}
