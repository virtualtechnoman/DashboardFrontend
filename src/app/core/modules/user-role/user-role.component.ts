import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {

  allUserRoles:any=[];
  can_access_bu:boolean=false;
  can_access_company:boolean=false;
  can_access_country:boolean=false;
  can_access_customer:boolean=false;
  can_access_district:boolean=false;
  can_access_region:boolean=false;
  can_access_therapy:boolean=false;
  can_access_users:boolean=false;
  can_access_city:boolean=false;

  constructor(private data:DataService) {
    this.data.getAllUserRoles().subscribe(res=>this.allUserRoles =res)
   }

  ngOnInit() {
  }

  AddUserRole(event) {
    event.preventDefault();
    const target = event.target;
    const user_role = target.querySelector('#user_role').value;
    const can_access_bu = this.can_access_bu;
    const can_access_company = this.can_access_company;
    const can_access_country = this.can_access_country;
    const can_access_customer = this.can_access_customer;
    const can_access_district = this.can_access_district;
    const can_access_region = this.can_access_region;
    const can_access_therapy = this.can_access_therapy;
    const can_access_users = this.can_access_users;
    const can_access_city = this.can_access_city;
    console.log(user_role,can_access_bu, can_access_company, can_access_country, can_access_customer, can_access_district, can_access_region, can_access_therapy, can_access_users, can_access_city)
    this.data.addUserRole(user_role,can_access_bu, can_access_company, can_access_country, can_access_customer, can_access_district, can_access_region, can_access_therapy, can_access_users, can_access_city)
      .subscribe(data => this.allUserRoles.push(data))
  }

  deleteUser(index) {
    this.data.deleteUserRole(this.allUserRoles[index]._id).subscribe(() => {
      // this.Users = this.Users.filter(user => user._id = !this.Users[index]._id)
      this.allUserRoles.splice(index, 1);
    })
  }

}
