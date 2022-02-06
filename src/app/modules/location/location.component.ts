import { Component, OnInit } from '@angular/core';
import { LocationPageCard } from 'src/app/models/card-location-page';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public cards: Array<LocationPageCard> = [
    {
      icon: "place",
      title: "Vizitati-ne",
      firstRow: "Bulevardul 1 Mai,",
      secondRow: "Constanța 900716"
    },
    {
      icon: "call",
      title: "Sunati-ne",
      firstRow: "Sensei Ungureanu Marius: +40 734187755,",
      secondRow: "Sensei Adetu Daniel: +40 737371238"
    },
    {
      icon: "alternate_email",
      title: "Trimite-ti un email",
      firstRow: "office@bodaishin.ro,",
      secondRow: "info@bodaishin.ro"
     },
     {
      icon: "place",
      title: "Program antrenamente",
      firstRow: "Sambata: 9.30 - 11.30,",
      secondRow: "Duminica: 9.30 - 11.30"
     }
  ];
}
