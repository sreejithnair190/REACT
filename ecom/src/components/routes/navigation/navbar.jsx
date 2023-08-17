import { Fragment, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setCurrentUser } from "./../../../store/user/userAction";
import { selectCurrentUser } from "./../../../store/user/userSelector";
import CartIcon from "../../cart/cart-icon/cart-icon";
import CartDropdown from "../../cart/cart-dropdown/cart-dropdown";
import { ReactComponent as Logo } from "../../../assets/svg/crown.svg";
import { CartContext } from "../../../context/cart";
import { signoutUser } from "../../../utils/firebase/firebase";
import { 
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink
} from "./navbar-style";

const Navbar = () => {
  const currentUser = useSelector( selectCurrentUser );
  const dispatch = useDispatch();
  const { isCartOpen } = useContext(CartContext);

  const handleSignout = async () => {
    try {
      dispatch(setCurrentUser(await signoutUser()));
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
