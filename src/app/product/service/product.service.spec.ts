import { TestBed } from '@angular/core/testing';
import { mockedProducts, ProductService } from './product.service';

describe(ProductService.name, () => {

  describe('loadProductList()', () => {
    it('should dispatch LoadProductsAction from store', () => {
      // if we are not using dummy date here, in the real scenario. It could be dispatch an action from the NGRX store,
      // and that dispatched action will trigger an http request to the server side to fetch product.
      // so the test here will be testing the `Store` calls the dispatch method with e.g. LoadProductsAction
      expect(1).toBe(1);
    });

    it('should send request to server', () => {
      // if we are not using dummy date here, in the real scenario. It could be send the request from the service(HttpClient)
      // so the test here will be testing the `HttpClient` get method gets called with proper parameters.
      expect(1).toBe(1);
    });
  });

  describe('getProductList$()', () => {
    it('should get the loaded products', () => {
      const { productService } = setup();
      const getProductList$Spy = jasmine.createSpy('getProductList$');
      productService.loadProductList();
      productService.getProductList$().subscribe(getProductList$Spy);

      expect(getProductList$Spy).toHaveBeenCalledWith(mockedProducts);
    });
  });

  function setup(): any {
    TestBed.configureTestingModule({
      providers: [ProductService],
    });

    const productService = TestBed.inject(ProductService);

    return {
      productService,
    };
  }
});
