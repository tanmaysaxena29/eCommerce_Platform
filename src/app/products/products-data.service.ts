import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable() 
/*Provided it for local instead of root
  @Injectable({
    providedIn: 'root'
  })
*/
export class ProductsDataService {

  constructor(private http: HttpClient) { }

  /*To fetch all products from json file*/
  getAllProducts()
  {
    return this.http.get('products.json')
  }
}
