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
import { RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { LocationComponent } from './modules/location/location.component';
import { AboutModule } from './modules/about/about.module';
import { AboutComponent } from './modules/about/about.component';
import { TrainingsComponent } from './modules/trainings/trainings.component';
import { TrainingsModule } from './modules/trainings/trainings.module';
import { NavigationMenuModule } from './modules/navigation-menu/navigation-menu.module';
import { ProgramModule } from './modules/program/program.module';
import { NgZoroAntdModule } from './shared/ng-zoro/ng-zoro-antd.module';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { GaleryModule } from './modules/galery/galery.module';
import { ɵNzResultNotFoundComponent } from 'ng-zorro-antd/result';


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
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'trainings', component: TrainingsComponent },
      { path: 'location', component: LocationComponent },
      // { path: 'program', component: ProgramComponent },
      // { path: 'galery', component: GaleryComponent },
      // { path: 'donate', component: DonateComponent },
      { path: '**', component: ɵNzResultNotFoundComponent },
    ])
  ],

  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
