import {IProduct} from './Product';

export interface SitemapQueryResponse {
  products: {edges: {node: IProduct}[]};
}
