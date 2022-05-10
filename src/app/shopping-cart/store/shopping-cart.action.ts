import { Action } from '@ngrx/store';
import { Product } from 'src/app/shared/models/product.model';

export enum ShoppingCartActionType {
  ADD_ITEM = '[shoppingCart][add]',
}

export class AddItemAction implements Action {
  readonly type = ShoppingCartActionType.ADD_ITEM;

  constructor(public productToAdd: Product) {}
}

export type ShoppingCartAction = AddItemAction;
