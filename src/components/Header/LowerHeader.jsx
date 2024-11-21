import React from "react";
import { FaBars } from "react-icons/fa";
import classes from "./Header.module.css";

const LowerHeader = () => {
  return (
    <div className={classes.lower_contener}>
      <ul className="nav-left">
        <li>
        <a onClick={(e) => e.preventDefault()}
          href="#"
          
        >
          <FaBars/>
          <span>All</span>
        </a>
        </li>
        <li>
        <a
           onClick={(e) => e.preventDefault()}
          href="#"
          
        >
          todays deal
        </a>
        </li>
        <li>
        <a
          onClick={(e) => e.preventDefault()}
          href="#"
          
        >
         customer service
        </a>
        </li>
        <li>
        <a
          onClick={(e) => e.preventDefault()}
          href="#"
          
        >
         Registry
        </a>
        </li>
        <li>
        <a
           onClick={(e) => e.preventDefault()}
          href="#"
          
        >
          Gift cards
        </a>
        </li>
     
    </ul>
    </div>
  );
};
export default LowerHeader;
