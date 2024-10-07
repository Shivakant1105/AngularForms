import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
// import { HttpClient } from  '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  getUserDetails() {
    if (localStorage.getItem('userData')) {
      return localStorage.getItem('userData');
    }
    return null;
  }
  setDataInLocalStorage(variableName: string, data: any) {
    localStorage.setItem(variableName, data);
  }
  getToken() {
    return localStorage.getItem('tkn');
  }
  clearStorage() {
    localStorage.clear();
  }

  constructor(public http: HttpClient) {}
  login(data: any) {
    return this.http.post('https://dummyjson.com/auth/login', data).pipe(
      map((res) => {
        return res;
      })
    );
  }
  reFreshToken(reFreshToken: any) {
    let authReq = {
      refreshToken: reFreshToken,
      expiresInMins: 1,
    };

    return this.http.post('https://dummyjson.com/auth/refresh', authReq);
  }
  getUserByAPi() {
    return this.http.get('https://dummyjson.com/auth/me');
  }
  signUp(data: any) {
    return this.http.post('https://dummyjson.com/users/add', data);
  }
}
