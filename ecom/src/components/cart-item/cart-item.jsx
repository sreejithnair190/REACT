import { useContext } from "react";
import "./cart-item.scss";

const CartItem = ({ item }) => {
  const { name, quantity } = item;

  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
