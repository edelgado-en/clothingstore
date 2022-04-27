import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">${cartTotal}</span>
    </div>
  );
};

export default Checkout;
