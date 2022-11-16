import { CheckoutState } from './checkout.state';
import { CheckoutItem, CheckoutItemsModel } from './checkout.model';
import { Selector } from '@ngxs/store';

export class CheckoutSelectors {
  @Selector([CheckoutState])
  static fetchCheckoutItems(state: CheckoutItemsModel): Array<CheckoutItem> {
    return state.items;
  }

  @Selector([CheckoutState])
  static getCheckoutItemsCount(state: CheckoutItemsModel): number {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  }

  @Selector([CheckoutState])
  static getTotalPrice(state: CheckoutItemsModel): number {
    return state.items.reduce((total, item) => total + item.totalPrice, 0);
  }
}
