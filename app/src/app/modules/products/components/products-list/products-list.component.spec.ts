import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsListComponent } from './products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NbDialogService } from '@nebular/theme';
import { Product } from '../../models/product.model';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [ProductsListComponent],
      providers: [{ provide: NbDialogService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;

    const products: any = {
      data: [
        {
          code: 1,
          name: 'Pepperoni',
          description:
            'Vitae enim vel nisi feugiat ultricies. Phasellus hendrerit pharetra posuere...',
          price: 50,
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_25EaiPYPjBfOedTGeYMdKf1UcAEJ-rtRg&usqp=CAU',
          quantity: 150,
        },
        {
          code: 2,
          name: 'Glute-Free Pizza',
          description:
            'Integer vitae enim vel nisi feugiat ultricies. Phasellus hendrerit pharetra.',
          price: 40,
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4h2WC35k0nUcgmPFCeEhcXr1_Bt3i7cV7g&usqp=CAU',
          quantity: 500,
        },
      ],
    };
    component.products = products
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should add new product to products list', () => {
    const products: Product[] = []
    const newProduct = {
      code: '12',
      name: 'test name',
      imageUrl: '',
      price: '5',
      quantity: '5',
      description: 'welcome to new item'
    }
    const productArr: Product [] = [newProduct]
    component.products = products
    component.submit()
    expect(component.products).toEqual(productArr)
  })

  it('it should reset the form value', () => {
    const products: Product[] = []
    const newProduct = {
      code: '12',
      name: 'test name',
      imageUrl: '',
      price: '5',
      quantity: '5',
      description: 'welcome to new item'
    }
    const productArr: Product [] = [newProduct]
    component.products = products
    component.submit()
    expect(component.form.value).toEqual({ name: '', price: '', quantity: '', code: '', desc: '' })
  })
});
