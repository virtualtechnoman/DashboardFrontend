import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private base = "http://localhost:5000/api/company/";

  constructor(private http: HttpClient) { }

  getallcompany() {
    return this.http.get(this.base + 'all')
  }

  addcompany(company_name, is_active) {
    return this.http.post(this.base + 'addCompany', { company_name, is_active })
  }

  deletecompany(id) {
    return this.http.delete(this.base + `delete/${id}`)
  }
}
