import {useShopQuery} from '@shopify/hydrogen';
import gql from 'graphql-tag';
import {FC} from 'react';

import Seo from './Seo.client';

const SeoServer: FC = () => {
  const {
    data: {
      shop: {name: shopName},
    },
  } = useShopQuery({
    query: QUERY,
    cache: {maxAge: 60 * 60 * 12, staleWhileRevalidate: 60 * 60 * 12},
  });

  return <Seo shopName={shopName} />;
};

const QUERY = gql`
  query shopName {
    shop {
      name
    }
  }
`;

export default SeoServer;
