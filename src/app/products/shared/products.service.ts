import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ProductsModel } from './products.model';

@Injectable()

export class ProductsService {
    url = "http://localhost:5000/api/products"
    constructor(private http: HttpClient) { }

    getAllProduct() {
        return this.http.get(this.url+'/all')
    }

    getProduct(id) {
        return this.http.get(this.url + '/' + id)
    }

    addProduct(product:ProductsModel) {
        console.log(product)
        return this.http.post("http://localhost:5000/api/products/addProduct", product);
    }

    deleteProduct(id) {
        return this.http.delete(this.url + '/' + id)
    }

    updateProduct(id, product) {
        this.http.put(this.url+'/'+id, product);
    }
}