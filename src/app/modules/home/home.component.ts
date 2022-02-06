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
      subTitle: "Primi pasi pe tatami",
      text: "Alaturi de noi, copii dumneavoastra pot face primii pasi intr-o calatorie magica a universului artelor martiale.",
      imagePath: "assets/img/o_goshi.jpg"
    },
    { title: "Dezvoltare personala",
      subTitle: "Evolutie",
      text: "Autocunoasterea prin arta martiala ofera sansa unui suport emotional si psihologic solid pentru viitorul adult.",
      imagePath: "assets/img/ipon_seoi_nage.jpg"
    },
    { title: "Armonie",
      subTitle: "Echilibru psiho emotional",
      text: "Armonia este o consecinta a antrenamentului focalizat martial si se dobandeste prin autocunoastere si experiente multple pe tatami.",
      imagePath: "assets/img/uchi_mata.jpg"
     }
  ];
  ngOnInit(): void {
  }
}
