import { AddCheckoutItem } from './../../../shared/redux/checkout/checkout.actions';
import { Store } from '@ngxs/store';
import { Product } from '@app/shared/model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input()
  product!: Product;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  addToCart(): void {
    this.store.dispatch(new AddCheckoutItem(this.product));
  }
}
