import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { getCategoriesMap } from "../../store/categories/category.selector";

import ProductCard from "../../components/product-card/product-card.component";
import "./category.styles.scss";
import { useParams } from "react-router-dom";

const Category = () => {
  console.log("render/rendering category component");
  const { category } = useParams();
  const categoriesMap = useSelector(getCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      {/* products safeguard because categoriesMap gets fetch async from firestore */}
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
