import { Observable } from 'rxjs';
import { AppState } from './../shared/redux/app.state';
import { Component, OnInit } from '@angular/core';
import { CheckoutItem } from '@app/shared/model';
import { Select } from '@ngxs/store';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  @Select(AppState.fetchCheckoutItems)
  items$!: Observable<Array<CheckoutItem>>;
  constructor() {}

  ngOnInit(): void {}
}
