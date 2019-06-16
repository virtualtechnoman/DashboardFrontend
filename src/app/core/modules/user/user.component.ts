import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/authgaurd/auth.service'
import { DataService } from '../../shared/services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public user = '';
  public Products = [];

  public pname = '';
  public price = 0;
  public id_ = '';
  public index = 0;
  constructor(private auth: AuthService, private data: DataService) { }

  ngOnInit() {
    this.user = this.auth.user;
    this.data.getAllProducts().subscribe(data => this.Products = data)
  }
  logout() {
    this.auth.logout();
  }
  deleteProduct(index) {

    this.data.deleteProduct(this.Products[index]._id).subscribe(() => {
      // this.Users = this.Users.filter(user => user._id = !this.Users[index]._id)
      this.Products.splice(index, 1);
    })
  }

  AddProduct(event) {
    event.preventDefault();
    const target = event.target;
    const pname = target.querySelector('#pname').value;
    const price = target.querySelector('#price').value;

    this.data.addProduct(pname, price).subscribe(data => this.Products.push(data))
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
