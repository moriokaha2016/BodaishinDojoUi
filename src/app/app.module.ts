import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './modules/auth/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { NavigationMenuComponent } from './modules/navigation-menu/navigation-menu.component';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavigationMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    HomeModule,
    FooterModule,
    LocationModule,
    AboutModule,
    TrainingsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'trainings', component: TrainingsComponent },
      { path: 'location', component: LocationComponent },

      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
