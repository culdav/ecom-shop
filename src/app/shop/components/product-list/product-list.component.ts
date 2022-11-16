import { AppState } from './../../../shared/redux/app.state';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@app/shared/model';
import { FetchProducts } from '@app/shared/redux/shop/shop.actions';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input()
  products: Array<Product> = [];

  @Select(AppState.getLoading) loading$!: Observable<boolean>;

  constructor() {}

  ngOnInit(): void {}
}
