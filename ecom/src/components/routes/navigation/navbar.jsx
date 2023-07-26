import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import Cart from "../../cart/cart";
import CartDropdown from "../../cart-dropdown/cart-dropdown";
import { ReactComponent as Logo } from "../../../assets/svg/crown.svg";
import "../../../assets/scss/navbar.scss";
import { UserContext } from "../../../context/user";
import { CartContext } from "../../../context/cart"
import { signoutUser } from "../../../utils/firebase/firebase";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const handleSignout = async () => {
    try {
      setCurrentUser(await signoutUser());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="link-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={handleSignout}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}

          <Cart />
        </div>
        { isCartOpen && <CartDropdown /> }
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
