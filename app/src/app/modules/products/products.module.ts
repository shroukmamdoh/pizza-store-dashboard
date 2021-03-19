import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsItemComponent } from './components/products-item/products-item.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NbCardModule, NbIconModule, NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [ProductsListComponent, ProductsItemComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NbCardModule,
    SharedModule,
    NbLayoutModule,
    NbIconModule
  ],
  exports: [ProductsListComponent],
})
export class ProductsModule {}
