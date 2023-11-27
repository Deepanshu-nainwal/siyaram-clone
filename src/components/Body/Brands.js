import React from "react";
import imgOne from "../../assets/Jhampstead.jpg";
import imgTwo from "../../assets/Mozzo.jpg";
import imgThree from "../../assets/Oxemberg.jpg";
import "./Brands.css";
const Brands = () => {
  return (
    <div className="brands-collection">
      <div className="brands">
        <img className=" brand-img" src={imgOne} alt="j.hampstead" />

        <h3>J.HAMPSTEAD</h3>
      </div>
      <div className="brands">
        <img className=" brand-img" src={imgTwo} alt="mozzo" />
        <h3>MOZZO</h3>
      </div>
      <div className="brands">
        <img className=" brand-img" src={imgThree} alt="oxemberg" />
        <h3>OXEMBERG</h3>
      </div>
    </div>
  );
};
export default Brands;
