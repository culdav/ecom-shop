import { Injectable } from '@angular/core';
import { SetUser, ClearUser } from './user.actions';
import { User } from './user.model';
import { Action, State, StateContext } from '@ngxs/store';

@State<User>({
  name: 'user',
  defaults: {
    id: '',
    email: '',
    displayName: '',
    loggedIn: false,
  },
})
@Injectable({
  providedIn: 'root',
})
export class UserState {
  @Action(SetUser)
  setUser({ getState, patchState }: StateContext<User>, action: SetUser) {
    patchState({
      ...getState(),
      ...action.user,
    });
  }

  @Action(ClearUser)
  clearUser({ getState, patchState }: StateContext<User>) {
    patchState({ ...getState(), loggedIn: false });
  }
}
