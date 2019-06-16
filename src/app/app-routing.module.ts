import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/modules/login/login.component';
import { HomeComponent } from './core/modules/home/home.component';
import { AuthGuard } from './core/shared/authgaurd/auth.guard';
import { UserComponent } from './core/modules/user/user.component';
import { ProductsComponent } from './products/products.component';
import { CityComponent } from './core/modules/city/city.component';
import { CompanyComponent } from './core/modules/company/company.component';
import { CustomerComponent } from './core/modules/customer/customer.component';
import { CountryComponent } from './core/modules/country/country.component';
import { Region } from './core/shared/services/region.service.service';
import { TherapyComponent } from './core/modules/therapy/therapy.component';
import { RegionComponent } from './core/modules/region/region.component';
import { District } from './core/shared/services/district.service.service';
import { BuComponent } from './core/modules/bu/bu.component';
import { DistrictComponent } from './core/modules/district/district.component';

const routes: Routes = [
  { path: '',  component: LoginComponent, },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'bu', component: BuComponent },
  { path: 'city', component: CityComponent },
  { path: 'company', component: CompanyComponent},
  { path: 'customer', component: CustomerComponent },
  { path: 'country', component: CountryComponent},
  { path: 'district', component: DistrictComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'region', component: RegionComponent},
  { path: 'therapy', component: TherapyComponent},
  { path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
