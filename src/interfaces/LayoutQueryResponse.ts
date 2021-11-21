import {ICollection} from './Collection';
import {IProduct} from './Product';
import {IShop} from './Shop';

export interface LayoutQueryResponse {
  shop: IShop;
  products: {edges: {node: IProduct}[]};
  collections: {edges: {node: ICollection}[]};
}
