import { Product } from "src/app/shared/models/product.model";

export interface ShoppingCartState {
  products: Array<Product>;
}

export const initialShoppingCartState: ShoppingCartState = {
  products: [],
}