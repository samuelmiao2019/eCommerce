import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShoppingCartState, SHOPPING_CART_FEATURE_STATE_KEY } from './shopping-cart.state.model';

const getShoppingCartState = createFeatureSelector<ShoppingCartState>(SHOPPING_CART_FEATURE_STATE_KEY);

export const selectAllProducts = createSelector(getShoppingCartState, state => {
  return state?.products || [];
});

export const getCount = createSelector(selectAllProducts, allProducts => allProducts.length);
