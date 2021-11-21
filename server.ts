import fs from 'fs';
import path from 'path';
import express from 'express';

import type HydrogenMiddleware from '@shopify/hydrogen/dist/esnext/framework/middleware';
import hydrogenMiddleware from '@shopify/hydrogen/middleware';

const resolve = (p: string) => path.resolve(__dirname, p);

const createServer = async () => {
  const indexProd = fs.readFileSync(resolve('dist/client/index.html'), 'utf-8');

  const app = express();

  app.use(require('compression')());
  app.use(
    require('serve-static')(resolve('dist/client'), {
      index: false,
    }),
  );

  app.use(
    '*',
    (hydrogenMiddleware as typeof HydrogenMiddleware)({
      getServerEntrypoint: () =>
        require('./dist/server/entry-server.js').default,
      indexTemplate: indexProd,
    }),
  );

  return {app};
};

createServer().then(({app}) => {
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Hydrogen running at http://localhost:${port}`);
  });
});
