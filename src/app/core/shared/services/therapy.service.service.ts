import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Therapy {

  private base = "http://localhost:5000/api/therapy/";

  constructor(private http: HttpClient) { }

  getallTherapy() {
    return this.http.get(this.base + 'all')
  }

  addTherapy(therapy_line, therapy_line_id, bu_id, notes) {
    return this.http.post(this.base + 'addTherapy', { therapy_line, therapy_line_id, bu_id, notes })
  }

  deleteTherapy(id) {
    return this.http.delete(this.base + `delete/${id}`);
  }
}
