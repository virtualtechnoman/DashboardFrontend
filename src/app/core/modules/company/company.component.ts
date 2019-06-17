import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../shared/services/company.service.service'
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  private companyname = '';
  private isactive = false;
  public items: any = [];
  companies:any[]=[];
  constructor(private company: CompanyService) {
    this.getAllCompany();
   }

  ngOnInit() {
  }

  addCompany(event) {
    let target = event.target;
    const companyname = target.querySelector('#companyname').value;
    const isactive = true;
    this.company.addcompany(companyname, isactive)
      .subscribe(data => this.companies.push(data));
  }

  deleteCompany(index) {
    this.company.deletecompany(this.companies[index]._id).subscribe(() => this.companies.splice(index, 1))
  }

  getAllCompany(){
    this.company.getallcompany().subscribe((res:[])=>this.companies = res)
  }
}
