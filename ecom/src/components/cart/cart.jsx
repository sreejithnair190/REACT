import { useContext } from 'react';
import {ReactComponent as CartIcon} from './../../assets/svg/shopping-bag.svg';
import { CartContext } from '../../context/cart';
import './cart.scss';

const Cart = () => {

  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const handleClick = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container'>
        <CartIcon className='cart-icon' onClick={handleClick} />
        <span className='item-count'>0</span>
    </div>
  )
}

export default Cart;