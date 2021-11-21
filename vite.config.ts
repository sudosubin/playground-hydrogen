import {defineConfig, Plugin} from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';

import shopifyConfig from './shopify.config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [hydrogen(shopifyConfig, {}) as Plugin[]],
  optimizeDeps: {include: ['@headlessui/react']},
});
