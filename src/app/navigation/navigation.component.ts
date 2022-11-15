import { AppState } from './../shared/redux/app.state';
import { GetUser } from './../shared/redux/user/user.actions';
import { AuthService } from '../core/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalStorageService } from '@app/core/local-storage.service';
import { Subject, takeUntil, Observable } from 'rxjs';
import { User } from '@app/shared/model';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Select(AppState.getUser) user$!: Observable<User>;
  @Select(AppState.getCheckoutItemsCount) checkoutCount$!: Observable<number>;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
