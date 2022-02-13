import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/cardModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cards: Array<Card> = [
    { title: "Inițiere",
      subTitle: "Primii pași pe tatami",
      text: "Alături de noi, copiii dumneavoastră pot face primii pași într-o călătorie magică a universului artelor marțiale.",
      imagePath: "assets/img/o_goshi.webp"
    },
    { title: "Dezvoltare personală",
      subTitle: "Evoluție",
      text: "Educația este un proces de lungă durată care duce la evoluție, însă nu este niciodată prea târziu să mai înveți ceva.",
      imagePath: "assets/img/ipon_seoi_nage.webp"
    },
    { title: "Armonie",
      subTitle: "Coordonarea dintre minte și corp",
      text: "Armonia este o consecință a antrenamentului focalizat marțial și se dobândește prin experiențe multiple care duc la autocunoaștere.",
      imagePath: "assets/img/uchi_mata.webp"
     }
  ];
  ngOnInit(): void {
  }
}
