import { CheckoutSelectors } from '@redux/checkout';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CheckoutItem } from '@app/shared/redux/checkout';
import { Select } from '@ngxs/store';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  @Select(CheckoutSelectors.fetchCheckoutItems)
  items$!: Observable<Array<CheckoutItem>>;
  @Select(CheckoutSelectors.getTotalPrice)
  totalPrice$!: Observable<number>;
  constructor() {}

  ngOnInit(): void {}
}
