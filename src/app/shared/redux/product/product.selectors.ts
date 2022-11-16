import { ProductState } from './product.state';
import { Product } from './product.model';
import { createSelector, Selector } from '@ngxs/store';

export class ProductSelectors {
  @Selector([ProductState])
  static fetchProducts(state: Array<Product>): Array<Product> {
    return state;
  }

  static getProductsByCategory(category: string) {
    return createSelector([ProductState], (state: Product[]) => {
      return state.filter((product) => product.category === category);
    });
  }
}
