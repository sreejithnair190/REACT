import { useContext } from "react";
import { CartContext } from "../../context/cart";
import "./checkout.scss"
import CheckoutItem from "./checkout-item/checkout-item";
const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  // const total = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0)
  return (
    <div className="checkout-container">
        <div className="checkout-header">
            <div className="header-block"><span>Product</span></div>
            <div className="header-block"><span>Description</span></div>
            <div className="header-block"><span>Quantity</span></div>
            <div className="header-block"><span>Price</span></div>
            <div className="header-block"><span>Remove</span></div>

        </div>
      {cartItems.map((cartItem) => {
        return (
          <CheckoutItem key={cartItem.id} checkoutItem={cartItem} />
        );
      })}
      <div className="total">Total: {cartTotal}</div>
    </div>
  );
};

export default Checkout;
