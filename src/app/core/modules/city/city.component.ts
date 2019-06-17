import { Component, OnInit } from '@angular/core';
import { City } from '../../shared/services/city.service.service'
import { CountryService } from '../../shared/services/country.service.service';
import { CompanyService } from '../../shared/services/company.service.service';
import { Region } from '../../shared/services/region.service.service';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  private cityname = '';
  private countryname = '';
  private regionname = '';
  private companyname = '';
  private isactive = false;
  public allCities: any = [];
  public allCountries: any = [];
  public allCompanies: any = [];
  public allRegions: any = [];

  selectedCompany;
  selectedCountry;
  selectedRegion;

  constructor(private city: City, private countryService:CountryService, private companyService:CompanyService,
    private regionService:Region) {
      this.countryService.getallcountry().subscribe(res=>this.allCountries = res);
      this.companyService.getallcompany().subscribe(res=>this.allCompanies = res);
      this.regionService.getallRegion().subscribe(res=>this.allRegions = res);
     }

  ngOnInit() {
    this.city.getallcity().subscribe(data => { console.log(data); this.allCities = data })
  }

  addcity(event) {
    let target = event.target;
    const company_name = this.selectedCompany;
    const country_name = this.selectedCountry;
    const region_name = this.selectedRegion;
    const city_name = target.querySelector('#city_name').value;
    const isactive = true;
    console.log(company_name, country_name, region_name, city_name, isactive)
    this.city.addcity(company_name, country_name, region_name, city_name, isactive)
      .subscribe(data => this.allCities.push(data))
  }

  deletecity(index) {
    this.city.deletecity(this.allCities[index]._id).subscribe(() => this.allCities.splice(index, 1))
  }
}
