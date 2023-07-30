import { useContext } from "react";
import { ProductContext } from "../../../context/product";
import CategoryPreview from "../../category-preview/category-preview";

const CategoriesPreview = () => {
  const { products } = useContext(ProductContext);
  return (
    <>
      {Object.keys(products).map((title) => {
        const product = products[title];
        return (<CategoryPreview key={title} title={title} products={product} />)
      })}
    </>
  );
};

export default CategoriesPreview;
