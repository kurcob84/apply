import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/index';

@Injectable()
export class LoginRouteGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router){}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return true;
//     return this.userService.isLoggedIn().map((ok) => {
//        if(ok) {
//          return true;
//        }
//        else {
//          this.router.navigateByUrl('/home');
//          return false;
//        }
//     });
  }
}
