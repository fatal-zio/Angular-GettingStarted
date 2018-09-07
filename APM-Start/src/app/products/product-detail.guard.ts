import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductDetailGuard implements CanActivate {
  
  constructor(private router: Router) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    //this 1 indicates that we want the second part of the URL. The Id. i.e. products/10 
    let id = +next.url[1].path;

    if(isNaN(id) || id < 1) {
      alert("Invalid product Id");
      this.router.navigate(['./products']);
      return false;
    }

    return true;
  }
}
