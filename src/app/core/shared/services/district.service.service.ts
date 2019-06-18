import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class District {

  private base = "http://localhost:5000/api/district/";

  constructor(private http: HttpClient) { }

  getallDistrict() {
    return this.http.get(this.base + 'all')
  }

  addDistrict(company_name, country_name, region_name, city_name, district_name, is_active) {
    return this.http.post(this.base + 'addDistrict', { company_name, country_name, region_name, city_name, district_name, is_active })
  }

  deleteDistrict(id) {
    return this.http.delete(this.base + `delete/${id}`);
  }

  updateDistrict(city_name, company_name, country_name, region_name, district_name, is_active, id) {
    return this.http.put(this.base + `update/${id}`, { city_name, company_name, country_name, region_name, district_name, is_active })
  }
}
