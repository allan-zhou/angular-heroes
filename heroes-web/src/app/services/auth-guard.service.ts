import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    return this.checkLogin();
  }

  checkLogin(): boolean {
    let token = localStorage.getItem('JWToken');

    var result = false;
    this.authService.refreshToken(token).subscribe(data => {
      console.log(data);
      if (data.success) {
        localStorage.setItem('JWToken', data.token);
        result = true;
      } else {
        this.router.navigateByUrl('/login');
        result = false;
      }
    });

    console.log(result);
    return result;
  }
}