import {ICollection} from './Collection';

export interface IndexQueryResponse {
  collections: {edges: {node: ICollection}[]};
}
