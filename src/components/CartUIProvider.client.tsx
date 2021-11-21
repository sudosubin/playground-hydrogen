import React, {
  useState,
  useMemo,
  useCallback,
  useContext,
  createContext,
  FC,
} from 'react';

interface ICartContext {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}

export const CartContext = createContext<ICartContext>(null as never);

const CartUIProvider: FC = ({children}) => {
  const [open, setOpen] = useState(false);

  const openCart = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const closeCart = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const toggleCart = useCallback(() => {
    setOpen(!open);
  }, [setOpen, open]);

  const contextValue = useMemo(() => {
    return {
      isCartOpen: open,
      openCart,
      closeCart,
      toggleCart,
    };
  }, [open, openCart, closeCart, toggleCart]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCartUI = () => {
  return useContext(CartContext);
};

export default CartUIProvider;
