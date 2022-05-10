import { Product } from 'src/app/shared/models/product.model';

export const SHOPPING_CART_FEATURE_STATE_KEY = 'shoppingCart';

export interface ShoppingCartState {
  products: Product[];
}

export const initialShoppingCartState: ShoppingCartState = {
  products: [],
};
