import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbIconModule,
  NbCardModule,
  NbButtonModule,
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
} from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './modules/products/products.module';
import { SharedModule } from './modules/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NbSidebarModule.forRoot(),
    BrowserModule,
    NbEvaIconsModule,
    NbIconModule,
    NbCardModule,
    NbButtonModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    ProductsModule,
    NbSidebarModule,
    AppRoutingModule,
    NbMenuModule.forRoot(),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
