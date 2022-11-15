import { User } from './../../model/user.model';
export class GetUser {
  static readonly type = '[User] Get user';
}

export class SetUser {
  static readonly type = '[User] Set user';

  constructor(public user?: User) {}
}

export class ClearUser {
  static readonly type = '[User] Clear user';
}
