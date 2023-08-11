import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import CartIcon from "../../cart/cart-icon/cart-icon";
import CartDropdown from "../../cart/cart-dropdown/cart-dropdown";
import { ReactComponent as Logo } from "../../../assets/svg/crown.svg";
import { UserContext } from "../../../context/user";
import { CartContext } from "../../../context/cart";
import { signoutUser } from "../../../utils/firebase/firebase";
import { 
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink
} from "./navbar-style";

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
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={handleSignout}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
