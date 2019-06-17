import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Customers {

  private base = "http://localhost:5000/api/customers/";

  constructor(private http: HttpClient) { }

  getallCustomer() {
    return this.http.get(this.base + 'all')
  }

  addCustomer(customer_id, customer_name,distirbutor, type, sector, region_name, city_name, district_name, notes, is_active) {
    return this.http.post(this.base + 'addCustomer', { customer_id, customer_name,distirbutor, type, sector, region_name, city_name, district_name, notes, is_active })
  }

  deleteCustomer(id) {
    return this.http.delete(this.base + `delete/${id}`);
  }
}
