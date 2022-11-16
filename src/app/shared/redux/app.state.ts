import { Injectable } from '@angular/core';
import { ProductService } from '@app/shop/services/product.service';
import { Action, Selector, State, StateContext } from '@ngxs/store';

export interface AppStateModel {
  loading: boolean;
}

const defaults: AppStateModel = {
  loading: false,
};

export class SetLoading {
  static readonly type = '[Shop] Set loading';

  constructor(public loading: boolean) {}
}

@State<AppStateModel>({
  name: 'shop',
  defaults,
})
@Injectable({
  providedIn: 'root',
})
export class AppState {
  @Selector()
  static getLoading(state: AppStateModel): boolean {
    return state.loading;
  }

  @Action(SetLoading)
  setLoading(
    { getState, patchState }: StateContext<AppStateModel>,
    action: SetLoading
  ) {
    patchState({
      ...getState(),
      loading: action.loading,
    });
  }
}
