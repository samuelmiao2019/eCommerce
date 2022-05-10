import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const PRODUCT_PAGE: string = 'product';
export const SHOPPING_CART_PAGE: string = 'shoppingCart';
export const HOME_PAGE: string = 'home';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
},
{
  path: HOME_PAGE,
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
},
{
  path: PRODUCT_PAGE,
  loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
},
{
  path: SHOPPING_CART_PAGE,
  loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
