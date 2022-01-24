import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleryComponent } from './galery.component';
import { NgZoroAntdModule } from 'src/app/shared/ng-zoro/ng-zoro-antd.module';
import { MaterialModule } from 'src/app/shared/material-design/material.module';


@NgModule({
  declarations: [
    GaleryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgZoroAntdModule
  ]
})
export class GaleryModule { }
