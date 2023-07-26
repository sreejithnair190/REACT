import { useContext } from "react";
import { ProductContext } from "../../context/product";
import ProductCard from "../product-card/product-card";
import "./shop.scss";

const Shop = () => {

  const { products } = useContext(ProductContext);
  
  return (
    <div className="products-container">
      {products.map( product => <ProductCard key={product.id} product={product} />)}
    </div>
  );
};

export default Shop;
