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
  category: string = '';

  @Select(AppState.getLoading) loading$!: Observable<boolean>;
  @Select(AppState.fetchProducts) products$!: Observable<Array<Product>>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new FetchProducts(this.category));
  }
}
