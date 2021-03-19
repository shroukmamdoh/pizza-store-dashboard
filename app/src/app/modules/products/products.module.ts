import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsItemComponent } from './components/products-item/products-item.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NbButtonModule, NbCardModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbToastrModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsListComponent, ProductsItemComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NbCardModule,
    SharedModule,
    NbLayoutModule,
    NbIconModule,
    NbButtonModule,
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
    NbInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ProductsListComponent],
})
export class ProductsModule {}
