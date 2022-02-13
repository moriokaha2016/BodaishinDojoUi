import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { MaterialModule } from '../../shared/material-design/material.module';
import { FooterModule } from '../footer/footer.module';
import { LocationRoutingModule } from './location-routing.module';



@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FooterModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }
