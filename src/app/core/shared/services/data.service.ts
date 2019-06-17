import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users, Products } from '../../../interfaces/userInterface'



@Injectable({
  providedIn: 'root'
})
export class DataService {
  private allusers = "http://localhost:5000/api/users/all";
  private allProducts = "http://localhost:5000/api/users/allp"
  private user_role_api_url = "http://localhost:5000/api/user_role/"
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.allusers)
  }
  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.allProducts)
  }

  getAllUserRoles(){
    return this.http.get(this.user_role_api_url+'all')
  }

  addUser(user_id,first_name, last_name, mobile, home_phone, buisness_phone,joining_date, manager_name,line,
    region_name, city_name , email, password, district_name, address, pin, title, user_role, is_active) {
    return this.http.post('http://localhost:5000/api/users/addUser', { user_id,first_name, last_name, mobile, home_phone, buisness_phone,joining_date, manager_name,line,
    region_name, city_name , email, password, district_name, address, pin, title, user_role, is_active })
  }

  addProduct(pname, price) {
    return this.http.post('http://localhost:5000/api/users/addProduct', { pname, price })
  }

  addUserRole(user_role,can_access_bu, can_access_company, can_access_country, can_access_customer, can_access_district, can_access_region, can_access_therapy, can_access_users, can_access_city){
    return this.http.post(this.user_role_api_url+'addUserRole', { user_role,can_access_bu, can_access_company, can_access_country, can_access_customer, can_access_district, can_access_region, can_access_therapy, can_access_users, can_access_city })
  }

  deleteUser(id) {
    return this.http.delete(`http://localhost:5000/api/users/delete/${id}`)
  }

  deleteProduct(id) {
    return this.http.delete(`http://localhost:5000/api/users/deletep/${id}`)
  }

  deleteUserRole(id) {
    return this.http.delete(this.user_role_api_url+'delete/'+id);
  }


  updateUser(name, email, password, id) {
    return this.http.put(`http://localhost:5000/api/users/update/${id}`, { name, email, password })
  }
  updateProduct(pname, price, id) {
    return this.http.put(`http://localhost:5000/api/users/updatep/${id}`, { pname, price })
  }

}
