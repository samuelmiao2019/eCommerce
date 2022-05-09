import { Component, Input } from "@angular/core";
import { Product } from "src/app/shared/models/product.model";
import { ShoppingCartService } from "src/app/shopping-cart/service/shopping-cart.service";

@Component({
  selector: 'wg-product-item-card',
  templateUrl: './product-item-card.component.html',
  styleUrls: ['./product-item-card.component.scss']
})
export class ProductItemCardComponent {

  @Input() product: Product;

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  public addToCart() {
    this.shoppingCartService.addToShoppingCart(this.product);
  }
}