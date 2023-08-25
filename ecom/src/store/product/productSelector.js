import {createSelector} from "reselect";

const selectProductReducer = (state) => state.product;

export const selectProduct = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice.products
);

export const selectProductsMap = createSelector(
  [selectProductReducer],
  (products) => products.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
)
