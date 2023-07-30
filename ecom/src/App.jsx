import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/home/home';
import Navbar from './components/routes/navigation/navbar';
import Auth from './components/routes/auth/auth';
import Shop from './components/shop/shop';
import Checkout from './components/checkout/checkout';
import './assets/scss/categories.scss';
import './assets/scss/app.scss';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Navbar /> } >
        <Route path="/" element={ <Home /> } />
        <Route path="/shop/*" element={ <Shop /> } />
        <Route path="/auth" element={ <Auth /> } />
        <Route path="/checkout" element={ <Checkout /> } />
      </Route>
    </Routes>
  );
}

export default App;
