import {IProduct} from './Product';

export interface NotFoundQueryResponse {
  products: {edges: {node: IProduct}[]};
}
