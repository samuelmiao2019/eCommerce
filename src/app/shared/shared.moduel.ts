import { NgModule } from '@angular/core';
import { ProductItemCardComponent } from './components/card/product-item-card/product-item-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

const COMPONENTS: any[] = [
  ProductItemCardComponent,
  HeaderComponent,
  FooterComponent,
];

@NgModule({
  imports: [],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [],
  exports: [
    ...COMPONENTS,
  ],
})
export class SharedModule { }
