import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { mockedProducts, ProductService } from '../service/product.service';
import { ProductListComponent } from './product-list.component';

describe(ProductListComponent.name, () => {

  describe('ngOnInit()', () => {
    it(`should call loadProductList method from ${ProductService.name}`, () => {
      const { component, productServiceSpy } = setup();

      component.ngOnInit();

      expect(productServiceSpy.loadProductList).toHaveBeenCalledTimes(1);
    });

    it(`should initialize products$ variable with the return value of calling getProductList$ method from ${ProductService.name}`, () => {
      const { component } = setup();
      const products$Spy = jasmine.createSpy('products$');

      component.ngOnInit();
      component.products$.subscribe(products$Spy);

      expect(component.products$).toBeDefined();
      expect(products$Spy).toHaveBeenCalledWith(mockedProducts);
    });
  });

  describe('openProductDetailModal()', () => {
    it('should call open method and opens the modal', () => {
      const { component, ngbModalSpy } = setup();

      component.openProductDetailModal();

      expect(ngbModalSpy.open).toHaveBeenCalled();
    });
  });

  function setup(): any {

    const productServiceSpy = jasmine.createSpyObj<ProductService>(['loadProductList', 'getProductList$']);
    productServiceSpy.getProductList$.and.returnValue(of(mockedProducts));

    const ngbModalSpy = jasmine.createSpyObj<NgbModal>(['open']);
    ngbModalSpy.open.and.returnValue({ componentInstance: {} as any } as any);

    TestBed.configureTestingModule({
      declarations: [
        ProductListComponent,
      ],
      providers: [
        {
          provide: ProductService,
          useValue: productServiceSpy,
        },
        {
          provide: NgbModal,
          useValue: ngbModalSpy,
        },
      ],
    });

    const fixture: ComponentFixture<ProductListComponent> = TestBed.createComponent(ProductListComponent);
    const component: ProductListComponent = fixture.componentInstance;

    return {
      component,
      fixture,
      productServiceSpy,
      ngbModalSpy,
    };
  }
});
