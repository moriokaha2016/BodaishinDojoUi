import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { Constraints } from 'src/app/Helper/constraints';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent {
  private _mobileQueryListener: () => void;
  public currentPage: string = "";
  private subscription: any;
  mobileQuery: MediaQueryList;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
      changeDetectorRef: ChangeDetectorRef,
      media: MediaMatcher,
      private breakpointObserver: BreakpointObserver,
      private _router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    this.subscription =_router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentPage = event.url;
    });
  }

  logout(){
    localStorage.removeItem(Constraints.USER_KEY);
    this._router.navigate(["/home"]);
  }

  get isUserLoggedIn(){
    const userSession = localStorage.getItem(Constraints.USER_KEY);
    if(userSession && userSession.length > 0){
      return true;
    }
    return false;
  }

  get isFooterDisplayed(){
    if((this._router.url != "/login") && (this._router.url != "/register")){
      return true;
    }
    return false;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
    this.subscription.unsubscribe();
  }
}
