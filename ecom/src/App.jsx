import Category from './components/category/category';
import './styles/categories.scss';
import categories from './json/categories.json';


const App = () => {
  return (
    <Category
      categories={categories}
    />
  );
}

export default App;
