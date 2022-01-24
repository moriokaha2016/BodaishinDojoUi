import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { MaterialModule } from 'src/app/shared/material-design/material.module';
import { NgZoroAntdModule } from '../ng-zoro/ng-zoro-antd.module';

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    NgZoroAntdModule,
    MaterialModule
  ],
  exports: [
    CarouselComponent
  ]
})
export class CarouselModule { }
