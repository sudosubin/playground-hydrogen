import {useParams} from 'react-router-dom';
import {useShopQuery, RawHtml} from '@shopify/hydrogen';
import gql from 'graphql-tag';
import {FC} from 'react';

import Layout from '../../components/Layout.server';
import NotFound from '../../components/NotFound.server';

const Page: FC = () => {
  const {handle} = useParams<{handle: string}>();
  const {data} = useShopQuery<{pageByHandle: {title: string; body: string}}>({
    query: QUERY,
    variables: {handle},
  });

  if (!data.pageByHandle) {
    return <NotFound />;
  }

  const page = data.pageByHandle;

  return (
    <Layout>
      <h1 className="text-2xl font-bold">{page.title}</h1>
      <RawHtml string={page.body} className="prose mt-8" />
    </Layout>
  );
};

const QUERY = gql`
  query PageDetails($handle: String!) {
    pageByHandle(handle: $handle) {
      title
      body
    }
  }
`;

export default Page;
