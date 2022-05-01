import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  //PROPERTY ACCESSORS
  //const person2 = {
  //    firstname: 'John',
  //  lastname: 'Doe'
  //};

  //console.log(person2['lastname']);
  // expected output: "Doe"

  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
