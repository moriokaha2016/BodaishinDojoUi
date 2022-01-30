import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../../shared/material-design/material.module';
import { CarouselModule } from 'src/app/shared/carousel/carousel.module';
import { FooterModule } from '../footer/footer.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CarouselModule,
    FooterModule,
    RouterModule
  ]
})
export class HomeModule { }
