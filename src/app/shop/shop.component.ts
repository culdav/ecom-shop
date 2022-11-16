import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Product } from '@app/shared/model';
import { Observable } from 'rxjs';
import { AppState } from '@app/shared/redux/app.state';
import { FetchProducts } from '@app/shared/redux/shop/shop.actions';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  @Select(AppState.menProducts) menProducts$!: Observable<Array<Product>>;
  @Select(AppState.womenProducts) womenProducts$!: Observable<Array<Product>>;
  @Select(AppState.kidsProducts) kidsProducts$!: Observable<Array<Product>>;

  menProducts: Product[] = [];
  womenProducts: Product[] = [];
  kidsProducts: Product[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new FetchProducts());
    this.menProducts$.subscribe((res) => {
      this.menProducts = res;
    });
    this.womenProducts$.subscribe((res) => {
      this.womenProducts = res;
    });
    this.kidsProducts$.subscribe((res) => {
      this.kidsProducts = res;
    });
  }
}
