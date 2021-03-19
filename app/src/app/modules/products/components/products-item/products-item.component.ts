import { Component, OnInit } from '@angular/core';
import * as products from '../../../../../assets/mocked-data/products.json';
@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss'],
})
export class ProductsItemComponent implements OnInit {
  products: any = (products as any).default;
  constructor() {}

  ngOnInit(): void {
    console.log('data', this.products);
  }
}
