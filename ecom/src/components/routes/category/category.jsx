import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../context/product";
import ProductCard from "../../product-card/product-card";
import "./category.scss";

const Category = () => {
  const { category } = useParams();
  const { products } = useContext(ProductContext);
  const [product, setProduct] = useState(products[category]);

  useEffect(() => {
    setProduct(products[category]);
  }, [category, products]);

  return (
    <div className="category-container">
      {product &&
        product.map((item) => <ProductCard key={item.id} product={item} />)}
    </div>
  );
};

export default Category;
