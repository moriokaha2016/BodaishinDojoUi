import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { MaterialModule } from '../material/material.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FooterModule
  ]
})
export class LocationModule { }
