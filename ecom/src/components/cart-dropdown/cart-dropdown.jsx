import { useContext } from "react";
import { CartContext } from "../../context/cart";
import CartItem from "../cart-item/cart-item";
import Button from "../button/button";
import "./cart-dropdown.scss";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => navigate("/checkout");
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(
          item => <CartItem key={item.id} item={item} />
        )}
      </div>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
