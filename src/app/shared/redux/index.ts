import { UserState } from './user/index';
import { ProductState } from './product/index';
import { CheckoutState } from './checkout/index';
import { AppState } from './app.state';

// export * from './user/index';
// export * from './product/index';
// export * from './checkout/index';
// export * from './app.state';

export const shopState = [UserState, ProductState, CheckoutState, AppState];
