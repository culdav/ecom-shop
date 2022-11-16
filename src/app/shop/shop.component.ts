import { Select, Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { FetchProducts, Product, ProductSelectors } from '@redux/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  constructor(private store: Store) {}

  @Select(ProductSelectors.getProductsByCategory('men'))
  menProducts$!: Observable<Array<Product>>;
  @Select(ProductSelectors.getProductsByCategory('women'))
  womenProducts$!: Observable<Array<Product>>;
  @Select(ProductSelectors.getProductsByCategory('kids'))
  kidsProducts$!: Observable<Array<Product>>;

  ngOnInit(): void {
    this.store.dispatch(new FetchProducts());
  }
}
