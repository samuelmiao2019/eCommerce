import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ShoppingCartService } from './shopping-cart/service/shopping-cart.service';

@Component({
  selector: 'wg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public selectedProductNumber$: Observable<number>;
  public title = 'eCommerce';

  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService,
  ) {
  }

  public ngOnInit(): void {
    this.selectedProductNumber$ = this.shoppingCartService.getSelectedProductsNumber$();
  }

  public navigateToShoppingCart(): void {
    this.router.navigate(['shoppingCart']);
  }

  public navigateToHome(): void {
    this.router.navigate(['home']);
  }

  public navigateToProduct(): void {
    this.router.navigate(['product']);
  }
}
