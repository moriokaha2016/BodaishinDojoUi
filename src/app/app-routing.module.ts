import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { HomeComponent } from './modules/home/home.component';
import { LocationComponent } from './modules/location/location.component';
import { TrainingsComponent } from './modules/trainings/trainings.component';

const routes: Routes = [
  // { path:"home",
  //   component: HomeComponent
  // },
  // { path:"about",
  // component: AboutComponent
  // },
  // { path:"trainings",
  // component: TrainingsComponent
  // },
  // { path:"location",
  //   component: LocationComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
