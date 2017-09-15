import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    // console.log('AuthGuard#canActivate called');

    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): Observable<boolean> | boolean {
    if (this.authService.isLogin()) {
      return true;
    }

    // Store the attempted URL for redirecting
    // this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    // this.router.navigate(['/login']);
    // return false;

    return this.authService.state().map( ok => {console.log(ok)
      if (!ok) {
        this.router.navigate(['/login']);
      }
      return ok;
    }).catch( err => {
      this.router.navigate(['/login']);
      return Observable.of(false);
    });
  }
}
