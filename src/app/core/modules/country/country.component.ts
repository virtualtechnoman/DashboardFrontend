import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../shared/services/company.service.service';
import { CountryService } from '../../shared/services/country.service.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  allCompanies: any[] = [];
  allCountries: any[] = [];
  public companyname = "";
  public countryname = "";
  public isactive = false;
  index = 0;

  constructor(private countryService: CountryService, private companyService: CompanyService) {
    this.companyService.getallcompany().subscribe((res: any[]) => {
      this.allCompanies = res;
    });
    this.getAllCountries();
  }

  ngOnInit() {
  }

  addCountry(event) {
    let target = event.target;
    const companyname = target.querySelector('#companyname').value;
    const countryName = target.querySelector('#countryname').value;
    const isactive = target.querySelector('#isActive').checked;
    this.countryService.addcountry(companyname, countryName, isactive)
      .subscribe(data => {
        (<HTMLInputElement>document.querySelector('#companyname')).value = "";
        (<HTMLInputElement>document.querySelector('#countryname')).value = "";
        (<HTMLInputElement>document.querySelector('#isActive')).checked = false;
        this.allCountries.push(data)
      });
  }

  deleteCountry(index) {
    this.countryService.deletecountry(this.allCountries[index]._id).subscribe(() => this.allCountries.splice(index, 1))
  }

  getAllCountries() {
    this.countryService.getallcountry().subscribe((res: []) => {
      this.allCountries = res;
    })
  }

  editCountry(i) {
    this.companyname = this.allCountries[i].company_name;
    this.countryname = this.allCountries[i].country_name;
    this.isactive = this.allCountries[i].is_active;
    this.index = i;
  }

  reset() {
    this.companyname = "";
    this.countryname = "";
    this.isactive = false;
  }

  updatecountry() {
    this.countryService.updatecountry(this.countryname, this.companyname, this.isactive, this.allCountries[this.index]._id)
      .subscribe(data => {
        this.reset();
        alert("record updated");
        this.allCountries.splice(this.index, 1, data);
      })

  }


}
