import { Product } from '../product/product.model';

export interface CheckoutItemsModel {
  items: CheckoutItem[];
}

export interface CheckoutItem {
  id: number;
  product: Product;
  quantity: number;
  totalPrice: number;
}
