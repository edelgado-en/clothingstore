import { useSelector } from "react-redux";
import { getCategoriesMap } from "../../store/categories/category.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(getCategoriesMap);

  //PROPERTY ACCESSORS
  //const person2 = {
  //    firstname: 'John',
  //  lastname: 'Doe'
  //};

  //console.log(person2['lastname']);
  // expected output: "Doe"

  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categoriesMap[title]}
        />
      ))}
    </>
  );
};

export default CategoriesPreview;
