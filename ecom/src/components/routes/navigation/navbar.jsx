import {Fragment, React} from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/svg/crown.svg"
import "../../../assets/scss/navbar.scss";

const Navbar = () => {
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
