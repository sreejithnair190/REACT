import {ItemContainer, ItemDetails, ItemImage, ItemName} from "./cart-item-style";

const CartItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;

  return (
    <ItemContainer>
      <ItemImage src={imageUrl} alt={name} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span className="price">{quantity} X ${price}</span>
      </ItemDetails>
    </ItemContainer>
  );
};

export default CartItem;
