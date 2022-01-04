import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';
import { CarouselModule } from 'src/app/shared/carousel/carousel.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CarouselModule,
    FooterModule
  ]
})
export class HomeModule { }
