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
  public city: String;
  public country: String;
  public region: String
  public company: String;
  private isactive: boolean = false;
  public index = 0;
  public allCities: any = [];
  public allCountries: any = [];
  public allCompanies: any = [];
  public allRegions: any = [];


  constructor(private cityService: City, private countryService: CountryService, private companyService: CompanyService,

    private regionService: Region) {
    this.countryService.getallcountry().subscribe(res => this.allCountries = res);
    this.companyService.getallcompany().subscribe(res => this.allCompanies = res);
    this.regionService.getallRegion().subscribe(res => this.allRegions = res);
  }

  ngOnInit() {
    this.cityService.getallcity().subscribe(data => { this.allCities = data })
  }

  addcity(event) {
    let target = event.target;
    const company_name = target.querySelector('#selectedCompany').value;
    const country_name = target.querySelector('#selectedCountry').value;
    const region_name = target.querySelector('#selectedRegion').value;
    const city_name = target.querySelector('#city_name').value;
    const isactive = true;

    this.cityService.addcity(company_name, country_name, region_name, city_name, isactive)
      .subscribe(data => this.allCities.push(data))
  }

  deletecity(index) {
    this.cityService.deletecity(this.allCities[index]._id).subscribe(() => this.allCities.splice(index, 1))
  }



  editcity(i) {
    this.city = this.allCities[i].city_name
    this.country = this.allCities[i].country_name
    this.region = this.allCities[i].region_name
    this.company = this.allCities[i].company_name;
    this.index = i;
    console.log(this.company)

  }

  reset() {
    this.city = '';
    this.country = '';
    this.region = '';
    this.company = '';
    this.isactive = false;
  }

  updatecity() {

    this.cityService.updatecity(this.company, this.country, this.region, this.city, this.isactive, this.allCities[this.index]._id)
      .subscribe(data => {
        this.reset();
        alert("recors updated");
        this.allCities.splice(this.index, 1, data);
      })
  }
}
