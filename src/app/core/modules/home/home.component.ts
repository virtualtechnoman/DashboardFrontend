import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service'
import { AuthService } from '../../shared/authgaurd/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Users = [];
  public Products = [];

  public name = '';
  public email = '';
  public password = "";
  public id = "";

  public pname = '';
  public price = 0;
  public id_ = '';
  public index = 0;


  constructor(private data: DataService, private auth: AuthService) { }


  ngOnInit() {
    this.data.getAllUsers().subscribe(data => this.Users = data)
    this.data.getAllProducts().subscribe(data => this.Products = data)
  }

  logout() {
    this.auth.logout();
  }

  AddUser(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.querySelector('#name').value;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;
    this.data.addUser(name, email, password).subscribe(data => this.Users.push(data))
  }

  AddProduct(event) {
    event.preventDefault();
    const target = event.target;
    const pname = target.querySelector('#pname').value;
    const price = target.querySelector('#price').value;

    this.data.addProduct(pname, price).subscribe(data => this.Products.push(data))
  }

  deleteUser(index) {
    this.data.deleteUser(this.Users[index]._id).subscribe(() => {
      // this.Users = this.Users.filter(user => user._id = !this.Users[index]._id)
      this.Users.splice(index, 1);
    })
  }

  deleteProduct(index) {

    this.data.deleteProduct(this.Products[index]._id).subscribe(() => {
      // this.Users = this.Users.filter(user => user._id = !this.Users[index]._id)
      this.Products.splice(index, 1);
    })
  }

  editUser(i) {
    this.name = this.Users[i].name;
    this.email = this.Users[i].email;
    this.password = this.Users[i].password;
    this.id = this.Users[i]._id;
    this.index = i;
  }

  updateUser(event) {
    event.preventDefault();
    this.data.updateUser(this.name, this.email, this.password, this.id).subscribe(data => this.Users.splice(this.index, 1, data))
  }

  editProduct(i) {
    this.pname = this.Products[i].pname;
    this.price = this.Products[i].price;
    this.id_ = this.Products[i]._id;
    this.index = i;
  }

  updateProduct(event) {
    event.preventDefault();
    this.data.updateProduct(this.pname, this.price, this.id_).subscribe(data => this.Products.splice(this.index, 1, data))
  }

}