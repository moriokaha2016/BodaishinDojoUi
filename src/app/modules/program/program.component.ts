import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listDataMap = {
    eight: [
      { type: 'success', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' }
    ],
  };

  // showTodayTraining(date: Date): string | null {
  //   if (date.getDay()===6) {
  //     return "Taci Waza (tehnici in picioare)";
  //   } else if(date.getDay()===0){
  //     return "Ne Waza (tehnici la sol)";
  //   }
  //   return null;
  // }
}
