import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ProductService } from '../../services/product.service';
import * as products from '../../../../../assets/mocked-data/products.json';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: any = (products as any).default;
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    desc: new FormControl(''),
    quantity: new FormControl('', [Validators.required]),
  });
  constructor(
    private productService: ProductService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService
  ) {}

  ngOnInit(): void {}

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log('form data', this.form.value);
  }

  isFormValid(): boolean {
    return this.form.invalid;
  }
  resetValue() {
    console.log('fff');
    this.form.reset({ name: '' });
  }
  openDialog(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }
}
