import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { from, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private toast: ToastrService
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.userdata$.pipe(
      map(user => {
        if (!user) {
          this.toast.error('Acceso denegado', 'Error', {
            closeButton: true,
            progressBar: true,
            positionClass: 'toast-bottom-right'
          });
          this.router.navigateByUrl('/home');
          return false;
        }
        return true;
      }
       )
    );
  }

}
