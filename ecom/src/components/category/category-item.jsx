import React from "react";

const CategoryItem = ({ title, imgUrl }) => {
  return (
    <div className="category-item-container">
        <div className="background-image"  
            style={
                {  backgroundImage: `url(${imgUrl})` }
            }
        />
        <div className="category-body-container">
            <h2>{ title }</h2>
            <p>Shop Now</p>
        </div>
    </div>
  );
};

export default CategoryItem;
