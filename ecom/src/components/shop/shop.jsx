import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../routes/categories-preview/categories-preview";
import Category from "../routes/category/category";
import { getCategoriesAndDocuments } from "./../../utils/firebase/firebase"
import { setProducts } from "./../../store/product/productAction";
import "./shop.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductsMap = async () => {
      const categories = await getCategoriesAndDocuments("categories");
      dispatch(setProducts(categories));
    };
    getProductsMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
