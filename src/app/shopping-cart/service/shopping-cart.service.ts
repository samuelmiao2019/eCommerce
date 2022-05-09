import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Product } from "src/app/shared/models/product.model";
import { AddItemAction } from "../store/shopping-cart.action";
import { getCount } from "../store/shopping-cart.selector";
import { ShoppingCartState } from "../store/shopping-cart.state.model";

@Injectable()
export class ShoppingCartService {

  constructor(private store: Store<ShoppingCartState>) {   
  }

  public getSelectedProductsNumber(): Observable<number> {
    return this.store.select(getCount);
  }

  public addToShoppingCart(product: Product): void {
    this.store.dispatch(new AddItemAction(product))
  }
}