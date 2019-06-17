import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/authgaurd/auth.service'
import { DataService } from '../../shared/services/data.service'
import { Region } from '../../shared/services/region.service.service';
import { City } from '../../shared/services/city.service.service';
import { District } from '../../shared/services/district.service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public user = '';
  public Products = [];
  allRegions: any = [];
  allCity: any = [];
  allDistricts: any = [];
  selectedDistrict;
  selectedRegion;
  selectedCity;
  selectedUserRole;
  allUserRoles: any = [];
  public Users = [];
  public name = '';
  public email = '';
  public password = "";
  public id = "";

  public pname = '';
  public price = 0;
  public id_ = '';
  public index = 0;
  constructor(private auth: AuthService, private data: DataService, private regionService: Region, private cityService: City, private districtService: District) { }

  ngOnInit() {
    this.user = this.auth.user;
    this.data.getAllUsers().subscribe(data => this.Users = data);
    this.data.getAllProducts().subscribe(data => this.Products = data);
    this.regionService.getallRegion().subscribe(data => this.allRegions = data);
    this.cityService.getallcity().subscribe(data => this.allCity = data);
    this.districtService.getallDistrict().subscribe(data => this.allDistricts = data);
    this.data.getAllUserRoles().subscribe(res=>this.allUserRoles = res)
  }
  logout() {
    this.auth.logout();
  }
  deleteProduct(index) {

    this.data.deleteProduct(this.Products[index]._id).subscribe(() => {
      // this.Users = this.Users.filter(user => user._id = !this.Users[index]._id)
      this.Products.splice(index, 1);
    })
  }

  AddProduct(event) {
    event.preventDefault();
    const target = event.target;
    const pname = target.querySelector('#pname').value;
    const price = target.querySelector('#price').value;
    this.data.addProduct(pname, price).subscribe(data => this.Products.push(data))
  }

  editProduct(i) {
    this.pname = this.Products[i].pname;
    this.price = this.Products[i].price;
    this.id_ = this.Products[i]._id;
    this.index = i;
  }

  updateProduct(event) {
    event.preventDefault();
    this.data.updateProduct(this.pname, this.price, this.id_).subscribe(data => this.Products.splice(this.index, 1, data))
  }


  AddUser(event) {
    event.preventDefault();
    const target = event.target;
    const user_id = target.querySelector('#user_id').value;
    const first_name = target.querySelector('#first_name').value;
    const last_name = target.querySelector('#last_name').value;
    const email = target.querySelector('#email').value;
    const mobile = target.querySelector('#mobile_number').value;
    const home_phone = target.querySelector('#home_phone').value;
    const buisness_phone = target.querySelector('#buisness_phone').value;
    const joining_date = target.querySelector('#joining_Date').value;
    const manager_name = target.querySelector('#manager_name').value;
    const password = target.querySelector('#password').value;
    const line = target.querySelector('#line').value;
    const region_name = target.querySelector('#region_name').value;
    const city_name = target.querySelector('#city_name').value;
    const district_name = target.querySelector('#district_name').value;
    const address = target.querySelector('#address').value;
    const pin = target.querySelector('#pin_code').value;
    const title = target.querySelector('#title').value;
    const user_role = target.querySelector('#user_role').value;
    const is_active = true;
    console.log(user_id, first_name, last_name, mobile, home_phone, buisness_phone, joining_date, manager_name, line,
      region_name, city_name, email, password, district_name, address, pin, title, user_role, is_active)
    this.data.addUser(user_id, first_name, last_name, mobile, home_phone, buisness_phone, joining_date, manager_name, line,
      region_name, city_name, email, password, district_name, address, pin, title, user_role, is_active)
      .subscribe(data => this.Users.push(data))
  }

  deleteUser(index) {
    this.data.deleteUser(this.Users[index]._id).subscribe(() => {
      // this.Users = this.Users.filter(user => user._id = !this.Users[index]._id)
      this.Users.splice(index, 1);
    })
  }

  editUser(i) {
    this.name = this.Users[i].name;
    this.email = this.Users[i].email;
    this.password = this.Users[i].password;
    this.id = this.Users[i]._id;
    this.index = i;
  }

  updateUser(event) {
    event.preventDefault();
    this.data.updateUser(this.name, this.email, this.password, this.id).subscribe(data => this.Users.splice(this.index, 1, data))
  }

  AddUserRole(event) {
    event.preventDefault();
    const target = event.target;
    const user_role = target.querySelector('#user_role').value;
    const can_access_bu = target.querySelector('#user_role').value;
    const can_access_company = target.querySelector('#user_role').value;
    const can_access_country = target.querySelector('#user_role').value;
    const can_access_customer =target.querySelector('#user_role').value;
    const can_access_district =target.querySelector('#user_role').value;
    const can_access_region = target.querySelector('#user_role').value;
    const can_access_therapy = target.querySelector('#user_role').value;
    const can_access_users = target.querySelector('#user_role').value;
    const can_access_city = target.querySelector('#user_role').value;
    console.log(user_role,can_access_bu, can_access_company, can_access_country, can_access_customer, can_access_district, can_access_region, can_access_therapy, can_access_users, can_access_city)
    this.data.addUserRole(user_role,can_access_bu, can_access_company, can_access_country, can_access_customer, can_access_district, can_access_region, can_access_therapy, can_access_users, can_access_city)
      .subscribe(data => this.Users.push(data))
  }

}
