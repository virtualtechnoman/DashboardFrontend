import { Component } from '@angular/core';
import { AuthService } from './core/shared/authgaurd/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cutom';
  constructor( private authService:AuthService){
  }
}
