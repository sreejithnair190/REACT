import Category from "./Category";
import './styles/categories.scss';
import categories from './json/categories.json';

const App = () => {
  return (
    <div className="categories-container">
     {categories.map( (category) => (
      <Category 
        key={ category.id }
        title= { category.title }
        imgUrl = { category.imageUrl }
      />
     ))}
    </div>
  );
}

export default App;
