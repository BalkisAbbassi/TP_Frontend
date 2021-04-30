import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  base_path="http://localhost:8000/api/products/";


  constructor(public http:HttpClient) { }

  //create new product
  createProduct(item:any):Observable<Product>{
    return this.http
    .post<Product>('http://localhost:8000/api/products/add',item)
  }

  //Get all Products data
  getProducts():Observable<Product>{
    return this.http
    .get<Product>(this.base_path+'index')
  }

  //Get signle Product data
  getProduct(id:any):Observable<Product>{
    return this.http
    .get<Product>('http://localhost:8000/api/products/view/'+id)
  }

  //Update product by id  

  updateProduct(id:number,item:any):Observable<Product>{
    return this.http
    .put<Product>('http://localhost:8000/api/products/edit/'+id,item)
  }

  //Delete product by id  

  deleteProduct(id:number):Observable<Product>{
    return this.http
    .delete<Product>('http://localhost:8000/api/products/delete/'+id)
  }

}