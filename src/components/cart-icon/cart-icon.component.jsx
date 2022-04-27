import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount } from "../../store/cart/cart.selector";
import { toggleCart } from "../../store/cart/cart.action";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);

  const handleCart = () => dispatch(toggleCart());

  return (
    <div onClick={handleCart} className="card-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
