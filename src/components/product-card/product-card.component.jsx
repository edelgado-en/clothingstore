import "./product-card.styles.scss";
import Button from "../button/button.component";

import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const { name, price, imageUrl } = product;

  //YOu do this as function so that you can optimize later and it is more readable
  const addProductToCart = () => {
    addItemToCart(product);
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