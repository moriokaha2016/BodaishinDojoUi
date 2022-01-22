import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramComponent } from './program.component';
import { MaterialModule } from '../material/material.module';
import { NgZoroAntdModule } from 'src/app/shared/ng-zoro/ng-zoro-antd.module';



@NgModule({
  declarations: [
    ProgramComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgZoroAntdModule
  ]
})
export class ProgramModule { }
