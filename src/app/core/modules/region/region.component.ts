import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../shared/services/company.service.service';
import { CountryService } from '../../shared/services/country.service.service';
import { Region } from '../../shared/services/region.service.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  allCompanies:any=[];
  allCountries:any=[];
  allRegions:any[]=[];
  selectedCountry;
  selectedCompany;
  items:any=[]
  constructor(private companyService:CompanyService, private countryService:CountryService, private regionService:Region) {
    this.companyService.getallcompany().subscribe((res:any[])=>{
      this.allCompanies = res;
    });
    this.countryService.getallcountry().subscribe((res:any)=>{
      this.allCountries = res;
    })
    this.getAllRegion();
   }

  ngOnInit() {
  }

  getAllRegion(){
    this.regionService.getallRegion().subscribe((res:any[])=>{
      this.allRegions= res;
    })
  }
  
  addRegion(event) {
    let target = event.target;
    const company_name = this.selectedCompany;
    const country_name = this.selectedCountry;
    const region_name = target.querySelector('#region_name').value;
    const is_active = true;
    this.regionService.addRegion(company_name, country_name, region_name, is_active)
      .subscribe(data => this.allRegions.push(data))
  }

  deleteRegion(index) {
    this.regionService.deleteRegion(this.allRegions[index]._id).subscribe(() => this.allRegions.splice(index, 1))
  }
}
