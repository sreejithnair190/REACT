import React from 'react'
import CategoryItem from './category-item';

const Category = ( { categories } ) => {
  return (
    <div className="categories-container">
     {categories.map( (category) => (
      <CategoryItem 
        key={ category.id }
        title= { category.title }
        imgUrl = { category.imageUrl }
      />
     ))}
    </div>
  )
}

export default Category