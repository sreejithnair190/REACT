import { Fragment, useContext } from "react";
import { ProductContext } from "../../context/product";
import ProductCard from "../product-card/product-card";
import "./shop.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <Fragment>
      {Object.keys(products).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {products[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
