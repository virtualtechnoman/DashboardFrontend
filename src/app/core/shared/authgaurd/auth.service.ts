import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedInStatus = false;
  public user = '';

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.getItem('access_token') != null) {
      this.loggedInStatus = true;
    } else {
      this.loggedInStatus = false;
    }
  }

  get isloggedIn() {
    console.log(this.loggedInStatus)
    return this.loggedInStatus

  }

  setloggedin(value: boolean) {
    if (localStorage.getItem('access_token') != null)
      this.loggedInStatus = value;
  }

  loginUser(email: String, password: String) {
    return this.http.post('http://localhost:5000/api/users/login', { email, password }).subscribe(data => {
      console.log(data)
      if (data["success"]) {
        localStorage.setItem('access_token', data["token"]);
        this.router.navigate(['home']);
        this.loggedInStatus = true;
      }
      else {
        window.alert("wrong credentials");
      }
    })
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['']);
    this.loggedInStatus = false;
  }

  loginUsers(email: String, password: String) {
    return this.http.post('http://localhost:5000/api/users/login/user', { email, password }).subscribe(data => {
      console.log(data)
      this.user = data["payload"].name;
      this.router.navigate(['user']);
      this.loggedInStatus = true;
    })
  }
}
