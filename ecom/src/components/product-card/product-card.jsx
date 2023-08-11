import { useContext } from "react";
import { CartContext } from "../../context/cart";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button";
import "./product-card.scss";

const ProductCard = ({product}) => {

  const { addItemToCart } = useContext(CartContext);
  const addToCart = () => addItemToCart(product);

  const {name, price, imageUrl} = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl}  alt={name}/>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addToCart}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
