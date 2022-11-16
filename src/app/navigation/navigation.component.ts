import { Component, OnDestroy, OnInit } from '@angular/core';
import { CheckoutItem, User } from '@app/shared/model';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  private storeSubscription!: Subscription;

  user: User | null = null;
  checkoutItemsCount: number = 0;

  constructor(public authService: AuthService, private store: Store) {}

  ngOnInit(): void {
    this.storeSubscription = this.store.subscribe((state) => {
      this.user = state.shop.user || null;
    });

    this.store.select((state) => {
      this.checkoutItemsCount = state.shop.checkout.reduce(
        (total: number, item: CheckoutItem) => total + item.quantity,
        0
      );
    });
  }

  ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
  }
}
