import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartService } from './shopping-cart/service/shopping-cart.service';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { shoppingCartReducer } from './shopping-cart/store/shopping-cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    ShoppingCartModule,
    StoreModule.forRoot(shoppingCartReducer),
  ],
  providers: [ShoppingCartService],
  bootstrap: [AppComponent],
})
export class AppModule { }
