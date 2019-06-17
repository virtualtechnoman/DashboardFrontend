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
import { CompanyComponent } from './core/modules/company/company.component';
import { CountryComponent } from './core/modules/country/country.component';
import { DistrictComponent } from './core/modules/district/district.component';
import { RegionComponent } from './core/modules/region/region.component';
import { TherapyComponent } from './core/modules/therapy/therapy.component';
import { CustomerComponent } from './core/modules/customer/customer.component';
import { UserRoleComponent } from './core/modules/user-role/user-role.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    CityComponent,
    BuComponent,
    CompanyComponent,
    CountryComponent,
    DistrictComponent,
    RegionComponent,
    TherapyComponent,
    CustomerComponent,
    UserRoleComponent
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
