import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;

  //YOu do this as function so that you can optimize later and it is more readable
  //YOu don't want call dispatch from the html
  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`$name`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addProductToCart} buttonType="inverted">
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
