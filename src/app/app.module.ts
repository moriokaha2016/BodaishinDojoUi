import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-design/material.module';
import { CarouselModule } from './shared/carousel/carousel.module';
import { HomeModule } from './modules/home/home.module';
import { FooterModule } from './modules/footer/footer.module';
import { LocationModule } from './modules/location/location.module';
import { AboutModule } from './modules/about/about.module';
import { TrainingsModule } from './modules/trainings/trainings.module';
import { NavigationMenuModule } from './modules/navigation-menu/navigation-menu.module';
import { ProgramModule } from './modules/program/program.module';
import { NgZoroAntdModule } from './shared/ng-zoro/ng-zoro-antd.module';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { GaleryModule } from './modules/galery/galery.module';
import { NotFoundModule } from './modules/not-found/not-found.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgZoroAntdModule,
    CarouselModule,
    HomeModule,
    GaleryModule,
    FooterModule,
    NavigationMenuModule,
    LocationModule,
    AboutModule,
    TrainingsModule,
    ProgramModule,
    NotFoundModule
  ],

  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
