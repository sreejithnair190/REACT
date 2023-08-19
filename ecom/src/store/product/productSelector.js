export const selectProducts = (state) =>
  state
  .product
  .products
  .reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
