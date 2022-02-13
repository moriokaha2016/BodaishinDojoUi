import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { MaterialModule } from '../../shared/material-design/material.module';
import { FooterModule } from '../footer/footer.module';
import { NgZoroAntdModule } from 'src/app/shared/ng-zoro/ng-zoro-antd.module';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FooterModule,
    NgZoroAntdModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
