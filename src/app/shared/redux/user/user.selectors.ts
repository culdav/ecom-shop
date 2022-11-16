import { UserState } from './user.state';
import { User } from './user.model';
import { Selector } from '@ngxs/store';
export class UserSelectors {
  @Selector([UserState])
  static getUserLoggedIn(state: User): boolean {
    return state.loggedIn;
  }
}
