import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import classes from './Product.module.css'

const ProductList = () => {
  const [products, setProducts] = useState([]); // Initialize state for products
  const [loading, setLoading] = useState(true); // Initialize state for loading
  const [error, setError] = useState(null); // Initialize state for error handling

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data); // Set products data
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        setError(err.message); // Handle errors
        setLoading(false); // Stop loading even if there's an error
      });
  }, []); // Empty dependency array ensures this runs once after the first render

  if (loading) return <p>Loading...</p>; // Show loading state
  if (error) return <p>Error: {error}</p>; // Show error state

  return (
    <section className={classes.Product_container}>
    
        {products.map((product) => (
     
            <ProductCard product={product} key={product.id}/>        

      
          
))}
    
    </section>
  );
};

export default ProductList;
