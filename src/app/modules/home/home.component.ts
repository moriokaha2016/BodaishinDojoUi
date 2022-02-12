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
      text: "Alaturi de noi, copiii dumneavoastra pot face primii pasi intr-o calatorie magica a universului artelor martiale.",
      imagePath: "assets/img/o_goshi.webp"
    },
    { title: "Dezvoltare personala",
      subTitle: "Evolutie",
      text: "Educatia este un proces de lunga durata care duce la evolutie, insa nu este niciodata prea tarziu sa mai inveti ceva.",
      imagePath: "assets/img/ipon_seoi_nage.webp"
    },
    { title: "Armonie",
      subTitle: "Coordonarea dintre minte si corp",
      text: "Armonia este o consecinta a antrenamentului focalizat martial si se dobandeste prin experiente multiple care duc la autocunoastere.",
      imagePath: "assets/img/uchi_mata.webp"
     }
  ];
  ngOnInit(): void {
  }
}
