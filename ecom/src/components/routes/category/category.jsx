import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProducts } from "./../../../store/product/productSelector";
import ProductCard from "../../product-card/product-card";
import "./category.scss";

const Category = () => {
  const { category } = useParams();
  const products = useSelector(selectProducts);
  const [product, setProduct] = useState(products[category]);

  useEffect(() => {
    setProduct(products[category]);
  }, [category, products]);

  return (
    <Fragment>
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {product &&
          product.map((item) => <ProductCard key={item.id} product={item} />)}
      </div>
    </Fragment>
  );
};

export default Category;
