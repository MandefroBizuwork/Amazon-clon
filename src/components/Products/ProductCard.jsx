import React from "react";
import Rating from "@mui/material/Rating";
import classes from "./Product.module.css";
import CurencyFormat from "../CurencyFormater/CurencyFormat";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../UserCart/cartSlice";

const ProductCard = ({ product }) => {
  const { id, image, title, rating, price } = product;
  const dispatch = useDispatch();

  const handleAddtoCart = (data) => {
    dispatch(addToCart(data));
  };

  return (
    <div className={`${classes.ProductCard}`}>
      <Link to={`products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <h2>{title}</h2>
      <div className={classes.rating}>
        <Rating value={rating?.rate || 0} precision={0.2} readOnly />
        <small>({rating?.count || 0} reviews)</small>
      </div>
      <div>
        <CurencyFormat amount={price} />
      </div>     
      <button  className={classes.buton} onClick={() => handleAddtoCart(product)}> Add to Cart</button>
    </div>
  );
};

export default ProductCard;
