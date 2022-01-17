import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramComponent } from './program.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ProgramComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class ProgramModule { }
