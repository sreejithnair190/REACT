import {
  CategoryItemContainer,
  BackgroundImage,
  CategoryBody
} from "./category-style";

const CategoryItem = ({ title, imgUrl }) => {
  return (
    <CategoryItemContainer>
        <BackgroundImage imageUrl={imgUrl} />
        <CategoryBody>
            <h2>{ title }</h2>
            <p>Shop Now</p>
        </CategoryBody>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
