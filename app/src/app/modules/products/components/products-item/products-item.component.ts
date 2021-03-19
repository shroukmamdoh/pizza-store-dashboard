import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss'],
})
export class ProductsItemComponent implements OnInit {
  @Input()
  product: Product
  constructor() {}

  ngOnInit(): void {
  }
}
