import {useCartUI} from './CartUIProvider.client';
import CartIconWithItems from './CartIconWithItems.client';
import {FC} from 'react';

interface CartToggleProps {
  handleClick: () => void;
}

const CartToggle: FC<CartToggleProps> = ({handleClick}) => {
  const cartUI = useCartUI();

  if (cartUI == null) {
    throw new Error('CartToggle must be a descendent of a CartUIProvider');
  }

  const {isCartOpen, toggleCart} = cartUI;

  return (
    <button
      type="button"
      aria-expanded={isCartOpen}
      aria-controls="cart"
      onClick={() => {
        toggleCart();
        handleClick();
      }}
    >
      <CartIconWithItems />
      <span className="sr-only">Open cart</span>
    </button>
  );
};

export default CartToggle;
