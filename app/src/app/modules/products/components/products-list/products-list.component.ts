import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ProductService } from '../../services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: any;
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    code: new FormControl(''),
    desc: new FormControl(''),
    quantity: new FormControl('', [Validators.required]),
  });
  constructor(
    private productService: ProductService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    const data = this.products.data;
    this.form.value.code = this.makeRandomCode()
    if (this.form.valid) {
      data.push(this.form.value);
      this.products.data = data;
      console.log('form data', this.products);
      this.resetValue();
    }
  }
  resetValue() {
    this.form.reset({ name: '', price: '', quantity: '', code: '', desc: '' });
  }

  getProducts() {
    this.http
      .get('../../../../assets/mocked-data/products.json')
      .pipe(
        map((data) => {
          console.log('result', data);
          this.products = data;
          return data;
        })
      )
      .subscribe((res) => {});
  }

  makeRandomCode() {
    let result = '';
    let characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (let i = 0; i < 100; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  openDialog(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }
}
