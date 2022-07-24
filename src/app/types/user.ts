import { Product } from './product';
import { Notification } from './notification';

export interface User {
  _id: string;
  username: string;
  email: string;
  class: string;
  favouriteProducts: Product[];
  createdAt: string;
  updatedAt: string;
  notifications?: Notification[];
}
