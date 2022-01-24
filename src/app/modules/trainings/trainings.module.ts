import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsComponent } from './trainings.component';
import { FooterModule } from '../footer/footer.module';
import { MaterialModule } from '../../shared/material-design/material.module';
import { NgZoroAntdModule } from 'src/app/shared/ng-zoro/ng-zoro-antd.module';

@NgModule({
  declarations: [
    TrainingsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgZoroAntdModule,
    FooterModule
  ]
})
export class TrainingsModule { }
