import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsItemComponent } from './components/products-item/products-item.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductsListComponent, ProductsItemComponent],
  imports: [CommonModule, ProductsRoutingModule],
  exports: [ProductsListComponent]
})
export class ProductsModule {}
