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
  allCompanies: any[]=[];
  allCountries: any[]=[];
  allDistricts: any[] = [];
  allRegions: any[] = [];
  allCustomers: any[] = [];
  selectedCompany;
  selectedCountry;
  selectedCity: any;
  selectedRegion: any;
  selectedDistrict: any;
  items: any = [];
  constructor(private companyService: CompanyService, private countryService: CountryService, private regionService: Region, private city: City,
    private districtService: District) {
    this.companyService.getallcompany().subscribe((res: any[]) => {
      this.allCompanies = res;
    })
    this.countryService.getallcountry().subscribe((res:any[])=>{
      this.allCountries =res;
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
    const company_name = this.selectedCompany;
    const country_name = this.selectedCountry;
    const region_name = this.selectedRegion;
    const city_name = this.selectedCity;
    const is_active = true;
    console.log(company_name, country_name, region_name, city_name, district_name, is_active)
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

}
