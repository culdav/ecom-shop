import { Injectable } from '@angular/core';
import { ProductService } from '@app/shop/services/product.service';
import { Action, State, StateContext } from '@ngxs/store';
import { FetchProducts } from './product.actions';
import { Product } from './product.model';

@State<Product[]>({
  name: 'products',
  defaults: [],
})
@Injectable({
  providedIn: 'root',
})
export class ProductState {
  constructor(private productService: ProductService) {}

  @Action(FetchProducts)
  getProducts({ setState }: StateContext<Product[]>) {
    this.productService.fetchProducts().then((items) => {
      setState(items);
    });
  }
}
