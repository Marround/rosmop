import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.auth.isAuth().then((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        return true;
      }else {
        this.router.navigate(['auth']);
        return false;
      }
    });
  }

}
