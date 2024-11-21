// import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import classes from "./Header.module.css";
import Logo from "../../images/logo.png";
import { CgShoppingCart } from "react-icons/cg";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import classe from "./style.module.css";
// import { DataContext } from "../DataProvider/DataProvider";

import { useSelector, useDispatch } from "react-redux";
//const items = useSelector((state) => state.cart.items);
const Header = () => {
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  // console.log(basket.length)
  return (
    <div className={classes.stikyheader}>
      <section className={classes.header_container}>
        <div className={classes.logo_container}>
          {/*  logo */}
          <Link to="/">
            <img src={Logo}></img>
          </Link>

          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>

            <div style={{maxWidth:"100px"}}>
              <p style={{width:"100%"}} >Deivered to<br/><strong style={{fontSize:"15px"}}>Ethiopia</strong></p>
            
            </div>
          </div>
        </div>
        <div className={classes.search}>
          <select name="" id="">
            <option value="">ALL</option>
          </select>

          <input type="text" placeholder="Search" />

         <span> <BsSearch size={30}  /></span>
        </div>

        <div
          className={classes.order_container}
          style={{ backgroundcolor: "#131921" }}
        >
          <ul>
            <li>
              <Link href="#" className={classes.language}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/1920px-Flag_of_the_United_States_%28Pantone%29.svg.png" />

                <select name=" " id="" style={{ cursor: "pointer" }}>
                  <option value="">EN</option>
                </select>
              </Link>
            </li>

            {/* <li style={{display:"flex",flexDirection:"column", alignItems:"start"}} className={classes.dropdowner}>
        
             <Link>
             <p>Hello signe in</p>
             <span>Account and lists</span>
             
             </Link>
              <ul className={classes.dropdown}>
                <li style={{backgroundColor:"#f3a847",borderRadius:"15px"}}>
                <Link to="/Signin">  Sign in</Link>
                </li>
                <li>
               <span style={{color:"black",fontSize:"15px"}}>  New customer</span> 
               <Link href="">start here</Link>
                </li>
              </ul>
         
                </li> */}

            <li className={classe.dropdown}>
              <Link className={classe.dropbtn}>
                <p style={{maxWidth:"200px"}}>Hello signe in</p>
                <span>Account and lists</span>
                
              </Link>
              <div className={classe.dropdown_content}>
                <Link
                  to="/Signin"
                  style={{
                    backgroundColor: "#f3a847",
                    borderRadius: "15px",
                    padding: "10px 20px",
                  }}
                >
                  {" "}
                  Sign in
                </Link>

                <span style={{ color: "black", fontSize: "15px" }}>
                  <Link href=""> New customer start here</Link>
                </span>
              </div>
            </li>

            <li>
              <Link
                to="/order"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <p>Returns<br/><strong>&Order</strong></p>
               
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className={classes.cart}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <CgShoppingCart size={30} />
                <span> {totalQuantity}</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <LowerHeader />
    </div>
  );
};

export default Header;
