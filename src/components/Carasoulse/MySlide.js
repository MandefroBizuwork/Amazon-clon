import React from "react";
// import img1 from "./carousel/10001.jpg";
// import img2 from "./carousel/10002.jpg";
// import img3 from "./carousel/10010.jpg";
// import img4 from "./carousel/10010.jpg";
// import img5 from "./carousel/10010.jpg";
// import img6 from "./carousel/10010.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ImageData } from "./carousel/ImageData";
// import LowerHeader from "../Header/LowerHeader";
import classes from "../Header/Header.module.css";

function MySlide() {
  return (
    <> 
    <div
      className="container-fluid"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "0",
        position: "relative",
       
      
      }}
    > 
     {/* <div className={classes.leftGradient}></div>
    <div className={classes.rightGradient}></div> */}
   

      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showThumbs={false}
        ariaLabel={"Image carousel"}
        useKeyboardArrows={true}
        statusFormatter={(currentItem, total) => {
          return (
            <h2>
              image {currentItem} of {total}
            </h2>
          );
        }}
      >   
        {ImageData.map((image, k) => {
          return (
            <>     

              <div class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active slide">
                    <img
                      class="d-block w-100"
                      src={image}
                      alt="Image 1"
                      width={"100%"}
                      height={"auto"}
                      key={k}
                      style={{opacity:"1"}}
                    /><div className={classes.Botom_gradient}></div>
                  </div>
                  {/* <div class="carousel-caption  d-md-block">
                    <h1 style={{ color: "black" }}>image {k + 1}</h1>
                    <p>slide {k + 1}</p>
                  </div> */}


                
                </div>
               
              </div> 
            </>
          );
        })}
      
      </Carousel>
     

    </div>
   
    
</>
  )
}

export default MySlide;
