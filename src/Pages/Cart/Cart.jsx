import React from 'react';
import { Link } from "react-router-dom";
import Layouts from '../../components/Layout/Layouts';
import clas from '../Product/product.module.css';
import CurencyFormat from '../../components/CurencyFormater/CurencyFormat';
import { Rating } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../components/UserCart/cartSlice';
import { FaAngleUp, FaChevronDown } from "react-icons/fa";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  return (
    <Layouts>
      <section className={clas.Cart_Section}>
        <div className={clas.Cart_container}>
          <h2>Your Shopping Basket Details</h2>
          <h3>Your Items</h3>
          <hr />
          {items.length === 0 ? (
            <p className={clas.emptyCartMessage}>
              Oops, no items in your cart.
            </p>
          ) : (
            items.map((item) => (
              <div key={item.id} className={clas.item_container}>
                <div className={clas.ProductDeatilCard}>
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h1>{item.title}</h1>
                    <div className={clas.rating}>
                      <Rating
                        value={item.rating?.rate || 0}
                        precision={0.2}
                        readOnly
                      />
                      <small>({item.rating?.count || 0} reviews)</small>
                    </div>
                    <div>
                      <CurencyFormat amount={item.price} />
                      <p style={{ maxWidth: '750px' }}>{item.description}</p>
                      <button
                        className={clas.removeButton}
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Remove from Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className={clas.Changebtns}>
                  <FaAngleUp onClick={() => dispatch(incrementQuantity(item.id))} />
                  <span>{item.quantity}</span>
                  <FaChevronDown onClick={() => dispatch(decrementQuantity(item.id))} />
                </div>
              </div>
            ))
          )}
        </div>
        {items.length !== 0 && (
          <div className={clas.cartSummary}>
            <div>
              <p>
                Subtotal ({totalQuantity} item{totalQuantity> 1 ? 's' : ''})
              </p>
              <CurencyFormat amount={totalAmount} />
            </div>
            <div className={clas.giftOption}>
              <input type="checkbox" id="gift" aria-label="Gift Option" />
              <label htmlFor="gift">
                <small>This order contains a gift</small>
              </label>
            </div>
            <Link to="/payments" className={clas.checkoutButton}>
              Continue to Checkout
            </Link>
          </div>
        )}
      </section>
    </Layouts>
  );
};

export default Cart;
