import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/cardModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cards: Array<Card> = [
    { title: "Initiere",
      subTitle: "Primii pasi pe tatami",
      text: "Alături de noi, copiii dumneavoastră pot face primii pași într-o călătorie magică a universului artelor marțiale.",
      imagePath: "assets/img/o_goshi.webp"
    },
    { title: "Dezvoltare personala",
      subTitle: "Evolutie",
      text: "Educatia este un proces de lunga durată care duce la evolutie, insa nu este niciodata prea tarziu sa mai inveti ceva.",
      imagePath: "assets/img/ipon_seoi_nage.webp"
    },
    { title: "Armonie",
      subTitle: "Coordonarea dintre minte si corp",
      text: "Armonia este o consecință a antrenamentului focalizat marțial și se dobândește prin experiențe multiple care duc la autocunoaștere.",
      imagePath: "assets/img/uchi_mata.webp"
     }
  ];
  ngOnInit(): void {
  }
}
