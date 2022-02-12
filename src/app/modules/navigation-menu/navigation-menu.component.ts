import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
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
  navbarfixed: boolean = false;

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
    this.subscription = _router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentPage = event.url;
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
    this.subscription.unsubscribe();
  }

  @HostListener('window:scroll', ['$event']) onScroll() {
    if(window.scrollY > 50){
      this.navbarfixed = true;
    }
    else {
      this.navbarfixed = false;
    }
  }
}
