import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../context/product";
import "./category.scss";
import ProductCard from "../../product-card/product-card";

const Category = () => {
  const { category } = useParams();
  console.log(category);
  const { products } = useContext(ProductContext);
  console.log(products);
  console.log(products[category]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(products[category]);
  }, [category, products]);

  return (
    <div>
      {product.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Category;
