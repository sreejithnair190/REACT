import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/home/home';
import Navbar from './components/routes/navigation/navbar';
import SignIn from './components/routes/auth/signIn';
import './assets/scss/categories.scss';
import './assets/scss/app.scss';

const Shop = () => {
  return <div>Shop</div>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Navbar /> } >
        <Route path="/" element={ <Home /> } />
        <Route path="/shop" element={ <Shop /> } />
        <Route path="/sign-in" element={ <SignIn /> } />
      </Route>
    </Routes>
  );
}

export default App;
