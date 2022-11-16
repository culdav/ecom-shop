import {
  AddCheckoutItem,
  ClearCheckoutItem,
  RemoveCheckoutItem,
} from './checkout/checkout.actions';
import { SetUser, ClearUser } from './user/user.actions';
import { ProductService } from './../../shop/services/product.service';
import { FetchProducts } from './shop/shop.actions';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Product } from '../model/product.model';
import { CheckoutItem } from '../model/checkout-item.model';

export interface AppStateModel {
  loading: boolean;
  user: User | null;
  products: Array<Product>;
  menProducts: Array<Product>;
  womenProducts: Array<Product>;
  kidsProducts: Array<Product>;
  checkout: Array<CheckoutItem>;
}

const defaults: AppStateModel = {
  loading: false,
  user: null,
  products: [],
  menProducts: [],
  womenProducts: [],
  kidsProducts: [],
  checkout: [],
};

@State<AppStateModel>({
  name: 'shop',
  defaults,
})
@Injectable({
  providedIn: 'root',
})
export class AppState {
  constructor(private productService: ProductService) {}

  @Selector()
  static getLoading(state: AppStateModel): boolean {
    return state.loading;
  }

  @Selector()
  static fetchProducts(state: AppStateModel): Array<Product> {
    return state.products;
  }

  @Selector()
  static menProducts(state: AppStateModel): Array<Product> {
    return state.menProducts;
  }

  @Selector()
  static womenProducts(state: AppStateModel): Array<Product> {
    return state.womenProducts;
  }

  @Selector()
  static kidsProducts(state: AppStateModel): Array<Product> {
    return state.kidsProducts;
  }

  @Selector()
  static getUser(state: AppStateModel): User | null {
    return state.user;
  }

  @Selector()
  static fetchCheckoutItems(state: AppStateModel): Array<CheckoutItem> {
    return state.checkout;
  }

  @Selector()
  static getCheckoutItemsCount(state: AppStateModel): number {
    return state.checkout.reduce((total, item) => total + item.quantity, 0);
  }

  @Action(FetchProducts)
  getProducst({ getState, patchState }: StateContext<AppStateModel>) {
    this.productService.fetchProducts().then((res) => {
      patchState({
        ...getState(),
        products: res,
        menProducts: res.filter((item) => item.category === 'men'),
        womenProducts: res.filter((item) => item.category === 'women'),
        kidsProducts: res.filter((item) => item.category === 'kids'),
      });
    });
  }

  @Action(SetUser)
  setUser(
    { getState, patchState }: StateContext<AppStateModel>,
    action: SetUser
  ) {
    patchState({
      ...getState,
      user: action.user,
    });
  }

  @Action(ClearUser)
  clearUser({ getState, patchState }: StateContext<AppStateModel>) {
    patchState({
      ...getState(),
      user: null,
    });
  }

  @Action(AddCheckoutItem)
  addCheckoutItem(
    { getState, patchState }: StateContext<AppStateModel>,
    action: AddCheckoutItem
  ): void {
    let updatedItems: Array<CheckoutItem> = [];
    const checkoutItems = getState().checkout;

    const existingItem = checkoutItems.find(
      (item) => item.id === action.product.id
    );

    if (existingItem) {
      updatedItems = checkoutItems.map((item) =>
        item.id === action.product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      patchState({
        ...getState(),
        checkout: updatedItems,
      });
    } else {
      const newItem: CheckoutItem = {
        id: action.product.id,
        product: action.product,
        quantity: 1,
        totalPrice: action.product.price,
      };

      patchState({
        ...getState(),
        checkout: [...checkoutItems, newItem],
      });
    }
  }

  @Action(RemoveCheckoutItem)
  removeCheckoutItem(
    { getState, patchState }: StateContext<AppStateModel>,
    action: RemoveCheckoutItem
  ): void {
    let updatedItems = [];
    const checkoutItems = getState().checkout;
    const existingItem = checkoutItems.find(
      (item) => item.id === action.productId
    );

    if (existingItem?.quantity === 1) {
      updatedItems = checkoutItems.filter(
        (item) => item.id !== action.productId
      );
    } else {
      updatedItems = checkoutItems.map((item) =>
        item.id === action.productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }

    patchState({
      ...getState(),
      checkout: updatedItems,
    });
  }

  @Action(ClearCheckoutItem)
  clearCheckoutItem(
    { getState, patchState }: StateContext<AppStateModel>,
    action: ClearCheckoutItem
  ) {
    const checkoutItems = getState().checkout;
    patchState({
      ...getState(),
      checkout: checkoutItems.filter((item) => item.id !== action.productId),
    });
  }
}
