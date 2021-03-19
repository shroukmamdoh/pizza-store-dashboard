import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import * as products from '../../../../../assets/mocked-data/products.json';
@Component({
  selector: 'app-products-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: any = (products as any).default;
  constructor() {}

  ngOnInit(): void {}
}
