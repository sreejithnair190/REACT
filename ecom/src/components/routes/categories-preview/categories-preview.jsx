import { useSelector } from "react-redux";
import { selectProducts } from "./../../../store/product/productSelector";
import CategoryPreview from "./../../category/category-preview/category-preview";

const CategoriesPreview = () => {
  const products = useSelector(selectProducts);
  return (
    <>
      {products &&
        Object.keys(products).map((title) => {
          const product = products[title];
          return (
            <CategoryPreview key={title} title={title} products={product} />
          );
        })}
    </>
  );
};

export default CategoriesPreview;
