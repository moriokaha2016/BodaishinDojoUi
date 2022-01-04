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
      imagePath: "assets/img/juniors.jpg"
    },
    { title: "Dezvoltare personala",
      subTitle: "Evolutie",
      text: "Autocunoasterea prin arta martiala ofera sansa unui suport emotional si psihologic solid pentru viitorul adult.",
      imagePath: "assets/img/tomoeNage.jpg"
    },
    { title: "Armonie",
      subTitle: "Echilibru psiho emotional",
      text: "Autocunoasterea prin arta martiala ofera sansa unui suport emotional si psihologic solid pentru viitorul adult.",
      imagePath: "assets/img/seiza.jpg"
     },
    // { title: "book4", subTitle: "book desc 4 ", text: "sdfsdfsdf", imagePath: "" }
  ];
  ngOnInit(): void {
  }
}
