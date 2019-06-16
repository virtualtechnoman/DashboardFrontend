import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/modules/login/login.component';
import { HomeComponent } from './core/modules/home/home.component';
import { FormsModule } from '@angular/forms';

import { DataService } from './core/shared/services/data.service'
import { AuthService } from './core/shared/authgaurd/auth.service';
import { HeaderinterceptorService } from './core/shared/services/headerinterceptor.service';
import { UserComponent } from './core/modules/user/user.component';
import { ProductsModule } from './products/products.module';
import { CityComponent } from './core/modules/city/city.component';
import { BuComponent } from './core/modules/bu/bu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    CityComponent,
    BuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    ProductsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
