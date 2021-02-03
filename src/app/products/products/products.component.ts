import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsDataService } from '../products-data.service';

@Component({
  selector: 'shopMart-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Observable<any>;
  constructor(private productsDataService: ProductsDataService) { }

  ngOnInit(): void {
    console.log(typeof this.products);
    this.products = this.productsDataService.getAllProducts();
  }

}
