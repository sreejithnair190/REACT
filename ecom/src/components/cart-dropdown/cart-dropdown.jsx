import { useContext } from "react";
import { CartContext } from "../../context/cart";
import CartItem from "../cart-item/cart-item";
import Button from "../button/button";
import "./cart-dropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(
          item => <CartItem key={item.id} item={item} />
        )}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
