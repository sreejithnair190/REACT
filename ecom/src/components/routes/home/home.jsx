import React from 'react'
import Category from '../../category/category';
import categories from '../../../json/categories.json'


const Home = () => {
  return (
    <Category
      categories={categories}
    />
  )
}

export default Home