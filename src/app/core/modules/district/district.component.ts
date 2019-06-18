import { Component, OnInit } from '@angular/core';
import { Region } from '../../shared/services/region.service.service';
import { City } from '../../shared/services/city.service.service';
import { District } from '../../shared/services/district.service.service';
import { CompanyService } from '../../shared/services/company.service.service';
import { CountryService } from '../../shared/services/country.service.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  allCities: any[] = [];
  allCompanies: any[] = [];
  allCountries: any[] = [];
  allDistricts: any[] = [];
  allRegions: any[] = [];
  allCustomers: any[] = [];
  selectedCompany;
  selectedCountry;
  selectedCity: any;
  selectedRegion: any;
  selectedDistrict: any;
  isActive = false;
  index = 0;
  constructor(private companyService: CompanyService, private countryService: CountryService, private regionService: Region, private city: City,
    private districtService: District) {
    this.companyService.getallcompany().subscribe((res: any[]) => {
      this.allCompanies = res;
    })
    this.countryService.getallcountry().subscribe((res: any[]) => {
      this.allCountries = res;
    })
    this.regionService.getallRegion().subscribe((res: any[]) => {
      this.allRegions = res;
    });
    this.city.getallcity().subscribe((res: any[]) => {
      this.allCities = res;
    });
    this.getAllDistrict();
  }

  ngOnInit() {
  }

  addDistrict(event) {
    let target = event.target;
    const district_name = target.querySelector('#district_name').value;
    const company_name = target.querySelector('#selectedCompany').value;
    const country_name = target.querySelector('#selectedCountry').value;
    const region_name = target.querySelector('#selectedRegion').value;
    const city_name = target.querySelector('#selectedCity').value;
    const is_active = target.querySelector('#isActive').checked;
    this.districtService.addDistrict(company_name, country_name, region_name, city_name, district_name, is_active)
      .subscribe(data => this.allDistricts.push(data));
  }

  deleteDistrict(index) {
    this.districtService.deleteDistrict(this.allDistricts[index]._id).subscribe(() => this.allDistricts.splice(index, 1))
  }

  getAllDistrict() {
    this.districtService.getallDistrict().subscribe((res: []) => {
      this.allDistricts = res;
      console.log(this.allCustomers)
    })
  }
  editDistrict(i) {
    this.selectedCompany = this.allDistricts[i].company_name;
    this.selectedCountry = this.allDistricts[i].country_name;
    this.selectedRegion = this.allDistricts[i].region_name;
    this.selectedCity = this.allDistricts[i].city_name;
    this.selectedDistrict = this.allDistricts[i].district_name;
    this.isActive = this.allDistricts[i].is_active;
    this.index = i;
  }

  reset() {
    this.selectedCompany = "";
    this.selectedCountry = "";
    this.selectedCity = "";
    this.selectedRegion = "";
    this.selectedDistrict = "";
    this.isActive = false;
  }

  updateDistrict() {
    this.districtService.updateDistrict(this.selectedCity, this.selectedCompany, this.selectedCountry, this.selectedRegion, this.selectedDistrict, this.isActive, this.allDistricts[this.index]._id)
      .subscribe(data => {
        this.reset();
        alert("record updated");
        this.allDistricts.splice(this.index, 1, data);
      })

  }
}
