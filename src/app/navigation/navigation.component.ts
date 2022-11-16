import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthService } from '@app/core/auth.service';
import { CheckoutSelectors } from '@redux/checkout';
import { User, UserSelectors } from '@redux/user';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Select(UserSelectors.getUserLoggedIn) loggedIn$!: Observable<boolean>;
  @Select(CheckoutSelectors.getCheckoutItemsCount)
  checkoutCount$!: Observable<number>;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
