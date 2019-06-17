import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  private base = "http://localhost:5000/api/country/";

  constructor(private http: HttpClient) { }

  getallcountry() {
    return this.http.get(this.base + 'all')
  }

  addcountry(company_name, country_name, is_active ) {
    return this.http.post(this.base + 'addCountry', { company_name, country_name, is_active })
  }

  deletecountry(id) {
    return this.http.delete(this.base + `delete/${id}`);
  }
}
