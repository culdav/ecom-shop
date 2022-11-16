import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { append, patch, removeItem, updateItem } from '@ngxs/store/operators';
import {
  AddCheckoutItem,
  ClearCheckoutItem,
  RemoveCheckoutItem,
} from './checkout.actions';
import { CheckoutItem, CheckoutItemsModel } from './checkout.model';

@State<CheckoutItemsModel>({
  name: 'checkout',
  defaults: {
    items: [],
  },
})
@Injectable({
  providedIn: 'root',
})
export class CheckoutState {
  @Action(AddCheckoutItem)
  addCheckoutItem(
    { getState, setState }: StateContext<CheckoutItemsModel>,
    action: AddCheckoutItem
  ): void {
    const existingItem = getState().items.find(
      (item) => item.id === action.product.id
    );

    if (existingItem) {
      setState(
        patch<CheckoutItemsModel>({
          items: updateItem<CheckoutItem>(
            (item) => item?.id === action.product.id,
            {
              ...existingItem,
              quantity: existingItem.quantity + 1,
              totalPrice: action.product.price * (existingItem.quantity + 1),
            }
          ),
        })
      );
    } else {
      const newItem: CheckoutItem = {
        id: action.product.id,
        product: action.product,
        quantity: 1,
        totalPrice: action.product.price,
      };

      setState(
        patch<CheckoutItemsModel>({
          items: append<CheckoutItem>([newItem]),
        })
      );
    }
  }

  @Action(RemoveCheckoutItem)
  removeCheckoutItem(
    { getState, setState }: StateContext<CheckoutItemsModel>,
    action: RemoveCheckoutItem
  ): void {
    const existingItem = getState().items.find(
      (item) => item.id === action.product.id
    );

    if (existingItem && existingItem.quantity >= 1) {
      setState(
        patch<CheckoutItemsModel>({
          items: updateItem<CheckoutItem>(
            (item) => item?.id === action.product.id,
            {
              ...existingItem,
              quantity: existingItem.quantity - 1,
              totalPrice: action.product.price * (existingItem.quantity - 1),
            }
          ),
        })
      );
    }

    setState(
      patch<CheckoutItemsModel>({
        items: removeItem<CheckoutItem>(
          (item) => item?.id === action.product.id && item.quantity === 0
        ),
      })
    );
  }

  @Action(ClearCheckoutItem)
  clearCheckoutItem(
    { getState, setState }: StateContext<CheckoutItemsModel>,
    action: ClearCheckoutItem
  ) {
    setState(
      patch<CheckoutItemsModel>({
        items: removeItem<CheckoutItem>(
          (item) => item?.id === action.productId
        ),
      })
    );
  }
}
