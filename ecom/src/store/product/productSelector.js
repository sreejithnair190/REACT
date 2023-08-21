export const selectProducts = (state) => {
  return (
    state.product.products.length &&
    state.product.products.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
  );
};
