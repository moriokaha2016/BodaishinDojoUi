import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { MaterialModule } from '../material/material.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FooterModule
  ]
})
export class AboutModule { }
