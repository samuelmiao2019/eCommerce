import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.moduel';
import { ProductDetailModalComponent } from './product-detail/product-detail-modal.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductService } from './service/product.service';

const COMPONENTS: any[] = [
  ProductComponent,
  ProductListComponent,
  ProductDetailModalComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers:[
    ProductService,
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class ProductModule {}
