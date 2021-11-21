import {flattenConnection, useShopQuery} from '@shopify/hydrogen';
import {ServerComponentResponse} from '@shopify/hydrogen/dist/esnext/framework/Hydration/ServerComponentResponse.server';
import gql from 'graphql-tag';
import {FC} from 'react';

import {SitemapQueryResponse} from '../interfaces/SitemapQueryResponse';

interface SitemapProps {
  response: ServerComponentResponse;
}

const Sitemap: FC<SitemapProps> = ({response}) => {
  response.doNotStream();

  const {data} = useShopQuery<SitemapQueryResponse>({query: QUERY});

  response.headers.set('content-type', 'application/xml');

  return response.send(shopSitemap(data));
};

const shopSitemap = (data: SitemapQueryResponse) => {
  return `
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    >
      ${flattenConnection(data.products)
        .map((product) => {
          return `
          <url>
            <loc>
              https://hydrogen-preview.myshopify.com/products/${product.handle}
            </loc>
            <lastmod>${product.updatedAt}</lastmod>
            <changefreq>daily</changefreq>
            <image:image>
              <image:loc>
                ${product?.images?.edges?.[0]?.node?.url}
              </image:loc>
              <image:title>
                ${product?.images?.edges?.[0]?.node?.altText ?? ''}
              </image:title>
              <image:caption />
            </image:image>
          </url>
        `;
        })
        .join('')}
    </urlset>`;
};

const QUERY = gql`
  query Products {
    products(first: 100) {
      edges {
        node {
          updatedAt
          handle
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
  }
`;

export default Sitemap;
