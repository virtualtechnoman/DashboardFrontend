import { Component, OnInit } from '@angular/core';
import { ProductsService } from './shared/products.service';
import { ProductsModel } from './shared/products.model';
import { FormBuilder, FormGroupDirective, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  allProducts: ProductsModel[] = [];
  currentProduct: ProductsModel = new ProductsModel();
  productForm: FormGroup;
  constructor(private productService: ProductsService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      // name: this.formBuilder.control['name'],
      // price: this.formBuilder.control['price'],
      // category: this.formBuilder.control['category']
      name: '',
      price: '',
      category: ''
    })
    this.productService.getAllProduct().subscribe((res: ProductsModel[]) => {
      this.allProducts = res;
    })
  }

  // setCurrentProduct(id) {
  //  this.allProducts.find(product => {
  //    if (product._id == id) {
  //      this.currentProduct = product;
  //
  //     }
  //   });
  //
  //   console.log(this.currentProduct);
  //   this.productForm.controls['name'].setValue(this.currentProduct.name);
  //   this.productForm.controls['price'].setValue(this.currentProduct.price);
  //   this.productForm.controls['category'].setValue(this.currentProduct.category);
  // }

  getSingleProduct(id) {
    this.productService.getProduct(id).subscribe((res: ProductsModel) => {
      this.currentProduct = res;
    })
  }

  saveForm(product) {
    if (this.currentProduct._id) {
      console.log("needs to update")
    } else {
      this.addProduct(product)
    }
  }

  addProduct(product: ProductsModel) {
    // console.log(this.productForm.value);
    this.productService.addProduct(product);
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id);
  }
}
