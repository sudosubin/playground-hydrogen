export interface WelcomeQueryResponse {
  shop: {
    name: string;
  };
  products: {edges: {node: {handle: string}}[]};
  collections: {edges: {node: {handle: string}}[]};
}
