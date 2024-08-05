import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoginService } from './login.service';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  constructor(private _authService: LoginService) {}
 
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    var token = JSON.parse(this._authService.getToken()!);
    let authReq = request;
 
    if (token) {
      authReq = request.clone({
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', `Bearer ${token.token}`),
      });
    }
 
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          const refreshToken = token?.refreshToken;
          if (refreshToken) {
            return this._authService.reFreshToken(refreshToken).pipe(
              switchMap((newToken:any) => {
                this._authService.setDataInLocalStorage(
                  'tkn',
                  JSON.stringify(newToken)
                );
 
                authReq = request.clone({
                  headers: new HttpHeaders()
                    .set('Content-Type', 'application/json')
                    .set('Authorization', `Bearer ${newToken.token}`),
                });
 
                return next.handle(authReq);
              })
            );
          }
        }
 
        // If the error isn't a 401 or there's no refresh token, throw the error
        return throwError(error);
      })
    );
  }
}