import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
              token: data.token,
              refreshToken: data.refreshToken,
            };

            if (data.token) {
              this._auth.setDataInLocalStorage(
                'userData',
                JSON.stringify(data)
                // console.log(data.to);
                
              );
              this._auth.setDataInLocalStorage('tkn', JSON.stringify(token));
              this.route.navigate(['/home']);
            }
          },
          error: (e) => {
            console.log(e);
            
          },
        });
    }
    else{
      this._auth
        .signUp({
          username: this.username,
          password: this.password,
        
        })
        .subscribe({
          next:(data)=>{
            console.log(data);
            this.route.navigate(['/template-form']);
            
          },
          error(err) {
            console.log(err);
            
          },
        })
      }

    }
  toggleForm() {
    this.isLogin = !this.isLogin;
    if(!this.isLogin){
      this.username = '';
      this.password = '';
    }
  }
}
