import { Component, Input, OnInit } from '@angular/core';
import { CheckoutItem } from '../../checkout.component';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.scss'],
})
export class CheckoutItemComponent implements OnInit {
  @Input()
  item!: CheckoutItem;

  constructor() {}

  ngOnInit(): void {}

  addItem(): void {}

  removeItem(): void {}

  clearItem(): void {}
}
