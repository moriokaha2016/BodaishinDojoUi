import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsComponent } from './trainings.component';
import { FooterModule } from '../footer/footer.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    TrainingsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FooterModule
  ]
})
export class TrainingsModule { }
