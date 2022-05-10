import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product.component';

export const PRODUCT_LIST: string = 'productList';

const routes: Routes = [
  {
    path: '',
    redirectTo: PRODUCT_LIST,
    pathMatch: 'full',
  },
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: PRODUCT_LIST,
        component: ProductListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule { }
