import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Region {

  private base = "http://localhost:5000/api/region/";

  constructor(private http: HttpClient) { }

  getallRegion() {
    return this.http.get(this.base + 'all')
  }

  addRegion(company_name, country_name, region_name, is_active ) {
    return this.http.post(this.base + 'addRegion', {  company_name, country_name,region_name, is_active, })
  }

  deleteRegion(id) {
    return this.http.delete(this.base + `delete/${id}`);
  }
}
