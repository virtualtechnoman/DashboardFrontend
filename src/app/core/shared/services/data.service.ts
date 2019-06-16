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

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.allusers)
  }
  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.allProducts)
  }

  addUser(name, email, password) {
    return this.http.post('http://localhost:5000/api/users/addUser', { name, email, password })
  }

  addProduct(pname, price) {
    return this.http.post('http://localhost:5000/api/users/addProduct', { pname, price })
  }

  deleteUser(id) {
    return this.http.delete(`http://localhost:5000/api/users/delete/${id}`)
  }

  deleteProduct(id) {
    return this.http.delete(`http://localhost:5000/api/users/deletep/${id}`)
  }


  updateUser(name, email, password, id) {
    return this.http.put(`http://localhost:5000/api/users/update/${id}`, { name, email, password })
  }
  updateProduct(pname, price, id) {
    return this.http.put(`http://localhost:5000/api/users/updatep/${id}`, { pname, price })
  }

}
