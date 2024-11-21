import React, { useEffect, useState } from "react";
import Layouts from "../../components/Layout/Layouts";
import { useParams } from "react-router-dom";
import { productURL } from "../../API/Source";
import clas from "./product.module.css";
import CurencyFormat from "../../components/CurencyFormater/CurencyFormat";
import { useDispatch } from "react-redux";
import { addToCart } from "../../components/UserCart/cartSlice";

function ProductDetail() {
  const { ProductID } = useParams();
  const [singleProduct, setSingleProduct] = useState({}); // Initialize as an object
  const dispatch = useDispatch();
 
  useEffect(() => {
    async function FetchProduct() {
      try {
        const response = await fetch(`${productURL}/products/${ProductID}`);
        const productDetail = await response.json(); // Await the response JSON
        if (response.ok) {
          setSingleProduct(productDetail); // Set the product details
        }
      } catch (err) {
        console.error("Error fetching product details:", err);
      }
    }

    FetchProduct();
  }, [ProductID]);

  const handleAddtoCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Layouts>
      <h1 style={{ padding: "50px" }}>
        {singleProduct.category || "Product Details"}
      </h1>
      <hr />
      <div className={clas.ProductDeatilCard}>
        <img
          src={singleProduct.image}
          alt={singleProduct.title || "Product image"}
        />
        <div>
          <h1>{singleProduct.title}</h1>
          <p>
            <CurencyFormat amount={singleProduct.price || 0} />
          </p>
          <p style={{ maxWidth: "750px" }}>{singleProduct.description}</p>
          <button onClick={() => handleAddtoCart(singleProduct)}>
            Add to Cart
          </button>
        </div>
      </div>
    </Layouts>
  );
}

export default ProductDetail;
