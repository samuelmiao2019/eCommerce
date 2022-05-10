import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/shared/models/product.model';
import { AddItemAction } from '../store/shopping-cart.action';
import { getCount } from '../store/shopping-cart.selector';
import { ShoppingCartService } from './shopping-cart.service';

describe(ShoppingCartService.name, () => {

  describe('getSelectedProductsNumber$()', () => {
    it('should call select method from Store', () => {
      const { shoppingCartService, storeSpy } = setup();

      shoppingCartService.getSelectedProductsNumber$();

      expect(storeSpy.select).toHaveBeenCalledWith(getCount);
      expect(storeSpy.select).toHaveBeenCalledTimes(1);
    });
  });

  describe('addToShoppingCart()', () => {
    it('should call dispatch method from Store', () => {
      const product: Product = {
        sku: '671695659-x',
        name: 'Fisher & Paykel WH756072 WashSmart 7.5kg Front Load Washine',
        price: 166,
        rrp: 223,
        image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
      };
      const { shoppingCartService, storeSpy } = setup();

      shoppingCartService.addToShoppingCart(product);

      expect(storeSpy.dispatch).toHaveBeenCalledWith(new AddItemAction(product));
      expect(storeSpy.dispatch).toHaveBeenCalledTimes(1);
    });
  });

  function setup(): any {

    const storeSpy = jasmine.createSpyObj<Store>(['dispatch', 'select']);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: Store,
          useValue: storeSpy,
        },
        ShoppingCartService,
      ],
    });

    const shoppingCartService = TestBed.inject(ShoppingCartService);

    return {
      shoppingCartService,
      storeSpy,
    };
  }
});
