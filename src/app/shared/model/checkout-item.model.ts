import { Product } from './product.model';

export interface CheckoutItem {
  id: number;
  product: Product;
  quantity: number;
  totalPrice: number;
}
