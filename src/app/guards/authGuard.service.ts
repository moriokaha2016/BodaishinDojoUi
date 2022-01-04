import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Constraints } from '../Helper/constraints';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private _router: Router ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = JSON.parse(localStorage.getItem(Constraints.USER_KEY)) as User;
    if(user && user.email){
      return true;
    } else {
      this._router.navigate(["login"]);
      return false;
    }
  }
}
