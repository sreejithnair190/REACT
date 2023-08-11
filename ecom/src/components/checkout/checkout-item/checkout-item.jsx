import { useContext } from "react";
import { CartContext } from "../../../context/cart";
import "./checkout-item.scss";

const CheckoutItem = ({ checkoutItem }) => {
  const { deleteCartItem, addItemToCart, removeItemFromCart } = useContext(CartContext);
  

  const { name, imageUrl, quantity, price } = checkoutItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(checkoutItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(checkoutItem)}>&#10095;</div>
     </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => deleteCartItem(checkoutItem)}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
