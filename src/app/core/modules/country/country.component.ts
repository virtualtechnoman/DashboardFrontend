import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../shared/services/company.service.service';
import { CountryService } from '../../shared/services/country.service.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  allCompanies:any[]=[];
  allCountries:any[]=[];
  selectedCompany:any;
  items:any=[];
  constructor( private countryService:CountryService, private companyService:CompanyService) {
    this.companyService.getallcompany().subscribe((res:any[])=>{
      this.allCompanies = res;
    });
    this.getAllCountries();
   }

  ngOnInit() {
  }

  addCountry(event) {
    console.log(this.selectedCompany)
    let target = event.target;
    const companyname = this.selectedCompany;
    const countryName = target.querySelector('#countryname').value;
    // const isactive = target.querySelector('#isActive').value;
    const isactive = true;
    this.countryService.addcountry(companyname, countryName, isactive)
      .subscribe(data => this.allCountries.push(data));
  }

  deleteCountry(index) {
    this.countryService.deletecountry(this.allCountries[index]._id).subscribe(() => this.items.splice(index, 1))
  }

  getAllCountries(){
    this.countryService.getallcountry().subscribe((res:[])=>{
      this.allCountries = res;
      console.log(this.allCountries)
    })
  }

}
