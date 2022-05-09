import { createSelector } from "@ngrx/store";
import { ShoppingCartState } from "./shopping-cart.state.model";

export const selectAllProducts = (state: ShoppingCartState) => state.products;

export const getCount = createSelector(selectAllProducts, (allProducts) => (allProducts || []).length);