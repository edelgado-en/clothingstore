import "./shop.styles.scss";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategoriesMap } from "../../store/categories/category.action";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import { Routes, Route } from "react-router-dom";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      //without thunk you would have to put the loading flag here
      //but what if you need to show the loading flag in other components or at the top of the app
      //now you have a problem because how do you pass the loading state up and down components
      const categoriesMap = await getCategoriesAndDocuments();
      //set loading flag to false
      dispatch(setCategoriesMap(categoriesMap));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
