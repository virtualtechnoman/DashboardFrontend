import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class City {
  private base = "http://localhost:5000/api/city/";
  constructor(private http: HttpClient) { }

  getallcity() {
    return this.http.get(this.base + 'all')
  }

  addcity(company_name, country_name, region_name, city_name, is_active) {
    return this.http.post(this.base + 'addCity', { company_name, country_name, region_name, city_name, is_active })
  }

  deletecity(id) {
    return this.http.delete(this.base + `delete/${id}`)
  }

  updatecity(company_name, country_name, region_name, city_name, is_active, id) {
    return this.http.put(this.base + `update/${id}`, { company_name, country_name, region_name, city_name, is_active })
  }
}
