import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { HomeComponent } from './modules/home/home.component';
import { LocationComponent } from './modules/location/location.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { TrainingsComponent } from './modules/trainings/trainings.component';

const routes: Routes = [
  { path:"",
    component: HomeComponent
  },
  { path:"home",
    component: HomeComponent
  },
  { path:"about",
  component: AboutComponent
  },
  { path:"trainings",
  component: TrainingsComponent
  },
  { path:"location",
    component: LocationComponent
  },
  { path:"**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
