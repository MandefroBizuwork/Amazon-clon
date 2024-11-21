import React from "react";
import { CategoryInfo } from "./CategoryInfo";
import CategoryCard from "./CategoryCard";
import classes from './Category.module.css';
const Category = () => {
  return (
    <section  className={classes.Category_Container} >
      {CategoryInfo.map((item, index) => (
        <CategoryCard key={index} data={item} />
      ))}
    </section>
   
  );
};

export default Category;
