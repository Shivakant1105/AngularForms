import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _auth: LoginService, private route: Router) {}

  ngOnInit(): void {}
  isLogin = true;
  username = 'emilys';
  password = 'emilyspass';
  expiresInMins = 1;
  onSubmit() {
    if (this.isLogin) {
      this._auth
        .login({
          username: this.username,
          password: this.password,
          expiresInMins: this.expiresInMins,
        })
        .subscribe({
          next: (data: any) => {
            const token = {
              token: data,
              refreshToken: data.refreshToken,
            };

            if (data) {
              this._auth.setDataInLocalStorage(
                'userData',
                JSON.stringify(data)
              );
              // console.log(data.data.token);
              // const token = data.data.token; // Your JWT token
              // const parts = token.split('.');

              // function base64UrlDecode(base64Url) {
              //   // Convert Base64Url to Base64
              //   let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
              //   // Decode Base64
              //   let binaryString = atob(base64);
              //   // Convert binary string to JSON object
              //   let binaryLen = binaryString.length;
              //   let bytes = new Uint8Array(binaryLen);
              //   for (let i = 0; i < binaryLen; i++) {
              //     bytes[i] = binaryString.charCodeAt(i);
              //   }
              //   let jsonString = new TextDecoder().decode(bytes);
              //   return JSON.parse(jsonString);
              // }

              // const payloadBase64Url = parts[1];
              // const payload = base64UrlDecode(payloadBase64Url);
              // console.log('token payload===>', payload);

              // this._auth.setDataInLocalStorage('tkn', JSON.stringify(token));
              this.route.navigate(['/home']);
            }
          },
          error: (e) => {
            console.log(e);
          },
        });
    }
    // else {
    //   this._auth
    //     .signUp({
    //       username: this.username,
    //       password: this.password,

    //     })
    //     .subscribe({
    //       next: (data) => {
    //         console.log(data);
    //         this.route.navigate(['/template-form']);

    //       },
    //       error(err) {
    //         console.log(err);

    //       },
    //     })
    // }
    console.log(this.username, this.password);
  }
  toggleForm() {
    this.isLogin = !this.isLogin;
    if (!this.isLogin) {
      this.username = '';
      this.password = '';
    }
  }
}
