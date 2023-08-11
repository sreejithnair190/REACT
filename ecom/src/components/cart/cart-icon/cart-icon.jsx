import { useContext } from 'react';
import { CartIconContainer, ShopIcon, ItemCount } from './cart-icon-style'
import { CartContext } from '../../../context/cart';

const CartIcon = () => {

  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const handleClick = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer>
        <ShopIcon onClick={handleClick} />
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;