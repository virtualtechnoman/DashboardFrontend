import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../shared/services/company.service.service'
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  public companyname = '';
  private isactive = false;
  public items: any = [];
  private index = 0;
  companies: any[] = [];
  constructor(private company: CompanyService) {
    this.getAllCompany();
  }

  ngOnInit() {
  }

  addCompany(event) {
    let target = event.target;
    const companyname = target.querySelector('#companyname').value;
    const isactive = target.querySelector('#isactive').checked;
    this.company.addcompany(companyname, isactive)
      .subscribe(data => {
        (<HTMLInputElement>document.querySelector('#companyname')).value = "";
        (<HTMLInputElement>document.querySelector('#isactive')).checked = false;
        this.companies.push(data)
      });
  }

  deleteCompany(index) {
    this.company.deletecompany(this.companies[index]._id).subscribe(() => this.companies.splice(index, 1))
  }

  getAllCompany() {
    this.company.getallcompany().subscribe((res: []) => this.companies = res)
  }

  editcompany(i) {
    this.companyname = this.companies[i].company_name;
    this.isactive = this.companies[i].is_active;
    this.index = i;
  }

  reset() {
    this.companyname = "";
    this.isactive = false;
  }

  updatecompany() {
    this.company.updatecompany(this.companyname, this.isactive, this.companies[this.index]._id)
      .subscribe(data => {
        this.reset();
        alert("record updated");
        this.companies.splice(this.index, 1, data);
      })

  }


}
