import { Component, OnInit } from '@angular/core';
import { Target } from '@angular/compiler';
import { AuthService } from '../../shared/authgaurd/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email = '';
  public password = "";

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;

    this.auth.loginUser(email, password);
  }

  loginUsers() {


    const email = this.email
    const password = this.password

    this.auth.loginUsers(email, password);
  }

}
