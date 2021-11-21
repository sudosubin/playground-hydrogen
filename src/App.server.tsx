import {ShopifyServerProvider, DefaultRoutes} from '@shopify/hydrogen';
import {Switch} from 'react-router-dom';
import {FC, Suspense} from 'react';

import shopifyConfig from '../shopify.config';

import DefaultSeo from './components/DefaultSeo.server';
import NotFound from './components/NotFound.server';
import CartProvider from './components/CartProvider.client';
import LoadingFallback from './components/LoadingFallback';
import {ImportGlobEagerOutput} from '@shopify/hydrogen/dist/esnext/foundation/Router/DefaultRoutes';
import {ReactQueryHydrationContext} from '@shopify/hydrogen/dist/esnext/foundation/ShopifyProvider/types';

interface AppProps {
  hydrationContext: ReactQueryHydrationContext;
}

const App: FC<AppProps> = ({...serverState}) => {
  const pages = import.meta.globEager(
    './pages/**/*.server.[jt]sx',
  ) as ImportGlobEagerOutput;

  return (
    <Suspense fallback={<LoadingFallback />}>
      <ShopifyServerProvider shopifyConfig={shopifyConfig} {...serverState}>
        <CartProvider>
          <DefaultSeo />
          <Switch>
            <DefaultRoutes
              pages={pages}
              serverState={serverState}
              fallback={<NotFound />}
            />
          </Switch>
        </CartProvider>
      </ShopifyServerProvider>
    </Suspense>
  );
};

export default App;
