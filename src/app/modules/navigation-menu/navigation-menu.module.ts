import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { NavigationMenuComponent } from './navigation-menu.component';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [
    NavigationMenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FooterModule
  ],
  exports: [
    NavigationMenuComponent
  ]
})
export class NavigationMenuModule { }
