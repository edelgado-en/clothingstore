import "./navigation.styles.scss";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
  //useSelector allows me to read from the redux store. State is the whole object, then you access a specific value from a specific reducer
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
