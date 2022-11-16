import { AddCheckoutItem } from '@redux/checkout';
import { Store } from '@ngxs/store';
import { Product } from '@redux/product';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
