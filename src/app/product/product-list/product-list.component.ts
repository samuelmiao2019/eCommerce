
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
import { ProductDetailModalComponent } from '../product-detail/product-detail-modal.component';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'wg-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  public products$: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private modalService: NgbModal,
  ){
  }

  public ngOnInit(): void {
    this.productService.loadProductList();
    this.products$ = this.productService.getProductList$();
  }

  public openProductDetailModal(product: Product) {
    const modalRef = this.modalService.open(ProductDetailModalComponent);
    modalRef.componentInstance.product = product;
  }
}
