import { Store } from '@ngxs/store';
import { Component, Input, OnInit } from '@angular/core';
import {
  CheckoutItem,
  AddCheckoutItem,
  RemoveCheckoutItem,
  ClearCheckoutItem,
} from '@redux/checkout';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.scss'],
})
export class CheckoutItemComponent implements OnInit {
  @Input()
  item!: CheckoutItem;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  addItem(): void {
    this.store.dispatch(new AddCheckoutItem(this.item.product));
  }

  removeItem(): void {
    this.store.dispatch(new RemoveCheckoutItem(this.item.product));
  }

  clearItem(): void {
    this.store.dispatch(new ClearCheckoutItem(this.item.product.id));
  }
}
