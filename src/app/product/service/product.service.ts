import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';

 @Injectable()
export class ProductService {

  private productList$: Subject<Product[]> = new BehaviorSubject<Product[]>([]);

  public loadProductList(): void {
    this.productList$.next(mockedProducts);
  }

  public getProductList$(): Observable<Product[]> {
    return this.productList$.asObservable();
  }
}


export const mockedProducts: Product[] = [
  {
    sku: '671695659-x',
    name: 'Fisher & Paykel WH756072 WashSmart 7.5kg Front Load Washine',
    price: 166,
    rrp: 223,
    image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
  }, {
    sku: '671695659-x',
    name: 'Fisher & Paykel WH756072 WashSmart 7.5kg Front Load Washine',
    price: 166,
    rrp: 223,
    image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
  }, {
    sku: '671695659-x',
    name: 'Fisher & Paykel WH756072 WashSmart 7.5kg Front Load Washine',
    price: 166,
    rrp: 223,
    image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
  },
  {
    sku: '671695659-x',
    name: 'Fisher & Paykel WH756072 WashSmart 7.5kg Front Load Washine',
    price: 166,
    rrp: 223,
    image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
  }, {
    sku: '671695659-x',
    name: 'Fisher & Paykel WH756072 WashSmart 7.5kg Front Load Washine',
    price: 166,
    rrp: 223,
    image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
  }, {
    sku: '671695659-x',
    name: 'Fisher & Paykel WH756072 WashSmart 7.5kg Front Load Washine',
    price: 166,
    rrp: 223,
    image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
  },
  {
    sku: '671695659-x',
    name: 'Fisher & Paykel WH756072 WashSmart 7.5kg Front Load Washine',
    price: 166,
    rrp: 223,
    image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
  }, {
    sku: '671695659-x',
    name: 'Fisher & Paykel WH756072 WashSmart 7.5kg Front Load Washine',
    price: 166,
    rrp: 223,
    image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
  }, {
    sku: '671695659-x',
    name: 'Fisher & Paykel WH756072 WashSmart 7.5kg Front Load Washine',
    price: 166,
    rrp: 223,
    image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
  },
];
