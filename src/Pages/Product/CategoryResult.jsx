import Layouts from "../../components/Layout/Layouts";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productURL } from '../../API/Source';
import ProductCard from "../../components/Products/ProductCard";
import classes from "./product.module.css";

function CategoryResult() {
  const { catgryName } = useParams();
  const [result, setResult] = useState([]);

  console.log(catgryName);

  useEffect(() => {
    async function LoadbyCategory() {
      try {
        const response = await fetch(`${productURL}/products/category/${catgryName}`);  // Use catgryName dynamically here
        const result = await response.json();
        console.log(result);
        if (response.ok) {
          setResult(result);
        }
      } catch (error) {
        console.error(error);
      }
    }

    LoadbyCategory();
  }, [catgryName]); // Include catgryName in dependency array

  return (
    <>
      <Layouts>
        <section>
          <h1 style={{ padding: "20px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category/{catgryName}</p>
          <hr/>
          <div className={classes.Product_container}>
            {result.length > 0 ? (
              result.map((item, index) => (
                <ProductCard product={item} key={index} />
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </section>
      </Layouts>
    </>
  );
};

export default CategoryResult;
