  import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
  import { OrderService } from '../order/order.service';
  import { RestaurantsService } from '../restaurants/restaurants.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ShoppingCartService,
    RestaurantsService,
    OrderService
  ]
})
export class CoreModule { }
