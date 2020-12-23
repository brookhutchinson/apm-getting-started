// services
import { Injectable }             from '@angular/core';
import { Router }                 from '@angular/router';
import { CanActivate }            from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot }    from '@angular/router';
import { UrlTree }                from '@angular/router';

// rxjs
import { Observable }             from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // store product id from the activated route url
    let id = +next.url[1].path;

    // router parameter is a valid product id
    if (isNaN(id) || id < 1) {
      alert("Invalid product id");

      // route to product list
      this.router.navigate(['/products']);

      // do not activate route
      return false;
    }

    // activate route
    return true;
  }
}
