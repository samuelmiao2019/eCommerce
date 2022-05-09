import { ShoppingCartAction, ShoppingCartActionType } from "./shopping-cart.action";
import { initialShoppingCartState } from "./shopping-cart.state.model";

export function shoppingCartReducer(
  state = initialShoppingCartState,
  action: ShoppingCartAction
) {
  switch (action.type) {
    case ShoppingCartActionType.ADD_ITEM: {

      return {
        ...state,
        products: [...state.products, action.productToAdd]
      };
    }
    default:
      return state;
  }
}