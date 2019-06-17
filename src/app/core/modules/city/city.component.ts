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
  private selectedcity = '';
  private selectedcountry = '';
  private selectedregion = '';
  private selectedcompany = '';
  private isactive = false;
  public index = 0;
  public allCities: any = [];
  public allCountries: any = [];
  public allCompanies: any = [];
  public allRegions: any = [];


  constructor(private city: City, private countryService: CountryService, private companyService: CompanyService,

    private regionService: Region) {
    this.countryService.getallcountry().subscribe(res => this.allCountries = res);
    this.companyService.getallcompany().subscribe(res => this.allCompanies = res);
    this.regionService.getallRegion().subscribe(res => this.allRegions = res);
  }

  ngOnInit() {
    this.city.getallcity().subscribe(data => { this.allCities = data })
  }

  addcity(event) {
    let target = event.target;
    const company_name = target.querySelector('#selectedCompany').value;
    const country_name = target.querySelector('#selectedCountry').value;
    const region_name = target.querySelector('#selectedRegion').value;
    const city_name = target.querySelector('#city_name').value;
    const isactive = true;

    this.city.addcity(company_name, country_name, region_name, city_name, isactive)
      .subscribe(data => this.allCities.push(data))
  }

  deletecity(index) {
    this.city.deletecity(this.allCities[index]._id).subscribe(() => this.allCities.splice(index, 1))
  }



  editcity(i) {
    this.selectedcity = this.allCities[i].city_name
    this.selectedcountry = this.allCities[i].company_name
    this.selectedregion = this.allCities[i].region_name
    this.selectedcompany = this.allCities[i].company_name;
    this.index = i;

  }

  reset() {
    this.selectedcity = '';
    this.selectedcountry = '';
    this.selectedregion = '';
    this.selectedcompany = '';
    this.isactive = false;
  }

  updatecity() {
    this.city.updatecity(this.selectedcompany, this.selectedcountry, this.selectedregion, this.selectedcity, this.isactive, this.allCities[this.index]._id)
      .subscribe(data => {
        this.reset();
        alert("recors updated");
        this.allCities.splice(this.index, 1, data);
      })

  }


}
