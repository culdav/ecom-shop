import { CheckoutRoutingModule } from './checkout-routes.module';
import { CheckoutComponent } from './checkout.component';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CheckoutItemComponent } from './components/checkout-item/checkout-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CheckoutComponent, CheckoutItemComponent],
  imports: [SharedModule, MatGridListModule, CheckoutRoutingModule],
  exports: [CheckoutComponent],
})
export class CheckoutModule {}
