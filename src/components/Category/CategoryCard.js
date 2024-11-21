import React from "react";
import classes from './Category.module.css';
import { Link } from "react-router-dom";

const CategoryCard = ({ data }) => {
  return (
    <div className={classes.CategoryCard}>
      <Link to={`/Category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imagelink} alt={data.title} />
        <p>Shop now</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
