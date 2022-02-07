import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/authGuard.service';
import { HomeComponent } from './modules/home/home.component';
import { LocationComponent } from './modules/location/location.component';

const routes: Routes = [
  // { path:"home",
  //   component: HomeComponent
  // },
  // { path:"login",
  //   component: LoginComponent
  // },
  // { path:"register",
  //   component: RegisterComponent
  // },
  // { path:"user-management",
  //   component: RegisterComponent, canActivate: [AuthGuardService]
  // },
  // { path:"location",
  //   component: LocationComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
