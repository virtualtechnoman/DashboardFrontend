import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Bu {
  private base = "http://localhost:5000/api/bu/";
  constructor(private http: HttpClient) { }


  getallbus() {
    return this.http.get(this.base + 'all')
  }

  addbu(bu_name, bu_id) {
    return this.http.post(this.base + 'addBU', { bu_id, bu_name })
  }

  deletebu(id) {
    return this.http.delete(this.base + `delete/${id}`)
  }


}
