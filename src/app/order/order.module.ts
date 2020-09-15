import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';


const ROUTES: Routes = [
  {path: '', component: OrderComponent}
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    OrderComponent,
    OrderItemsComponent,
    DeliveryCostsComponent
  ]
})
export class OrderModule { }