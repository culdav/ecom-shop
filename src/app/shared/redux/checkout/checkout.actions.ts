import { Product } from '@app/shared/model';
export class AddCheckoutItem {
  static readonly type = '[Checkout] Add item';

  constructor(public product: Product) {}
}

export class RemoveCheckoutItem {
  static readonly type = '[Checkout] Remove item';

  constructor(public productId: number) {}
}

export class ClearCheckoutItem {
  static readonly type = '[Checkout] Clear item';

  constructor(public productId: number) {}
}

export class GetCheckoutItems {
  static readonly type = '[Checkout] Get items';
}
