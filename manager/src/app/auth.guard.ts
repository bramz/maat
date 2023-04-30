import { Injectable } from '@angular/core'
import { 
  ActivatedRouteSnapshot, 
  CanActivate, 
  CanLoad, 
  Route, 
  RouterStateSnapshot, 
  UrlSegment, 
  UrlTree } 
from '@angular/router'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { TStoreService } from './t-store.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  isLoggedin = false
  constructor(
    private router: Router,
    private tokenStoreService: TStoreService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.isLoggedin = !!this.tokenStoreService.getToken()
      if(this.isLoggedin) {
        return true
      } else {
        return false
      }
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true
  }
}
