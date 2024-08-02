import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DealyGuard implements CanActivate {
  canActivate(): Observable<boolean> {
    return of(true).pipe(delay(3000));
  }
  
}
