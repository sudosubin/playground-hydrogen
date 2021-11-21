import {FC, useCallback} from 'react';
import {CartProvider as ShopifyCartProvider} from '@shopify/hydrogen/client';

import CartUIProvider, {useCartUI} from './CartUIProvider.client';

interface CartProviderProps {
  numCartLines?: number;
}

const CartProvider: FC<CartProviderProps> = ({children, numCartLines}) => {
  return (
    <CartUIProvider>
      <Provider numCartLines={numCartLines}>{children}</Provider>
    </CartUIProvider>
  );
};

const Provider: FC<CartProviderProps> = ({children, numCartLines}) => {
  const {openCart} = useCartUI();

  const open = useCallback(() => {
    openCart();
  }, [openCart]);

  return (
    <ShopifyCartProvider
      numCartLines={numCartLines}
      onLineAdd={open}
      onCreate={open}
    >
      {children}
    </ShopifyCartProvider>
  );
};

export default CartProvider;
