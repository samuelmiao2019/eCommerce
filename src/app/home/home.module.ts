import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.moduel';
import { HomeComponent } from './home.component';

const COMPONENTS: any[] = [
  HomeComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    HomeRoutingModule,
  ],
  exports: [
    ...COMPONENTS,
  ],
})
export class HomeModule { }
