import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { shoppingCartReducer } from './store/shopping-cart.reducer';

const COMPONENTS: any[] = [
  ShoppingCartComponent,
];

@NgModule({
  imports: [
    ShoppingCartRoutingModule,
    StoreModule.forFeature('shoppingCart', shoppingCartReducer),
  ],
  declarations: [
    ...COMPONENTS,
  ],
})
export class ShoppingCartModule {}
