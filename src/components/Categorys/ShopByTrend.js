import React from "react";
import FormalWear from "../../assets/FormalWear.jpg";
import CasulWear from "../../assets/CasulWear.jpg";
import Checks from "../../assets/Checks.jpg";
import linenShirts from "../../assets/linenShirts.jpg";
import { Link } from "react-router-dom";
import Footer from "../Fotter/Footer";
import "./ShopByTrend.css";
function ShopByTrend() {
  return (
    <div className="shop_by_trend_main_div">
      <p>
        <span className="shop_by_trend_p_span-1">
          <Link to="/">Home</Link> /
        </span>
        <span> Shop-By-Trends</span>
      </p>
      <h1 className="shop_by_trend_Heading">Our Collections</h1>
      <div className="casual_formal_img_div">
        <div className="casul_img-div">
          <img className="casual_img" src={CasulWear} alt="img" />
        </div>
        <div className="formal_img-div">
          <img className="formal_img" src={FormalWear} alt="img" />
        </div>
      </div>
      <div className="linen_checks_img_div">
        <div className="checks_img_div">
          <img className="checks_img" src={Checks} alt="img" />
        </div>
        <div className="linen_img_div">
          <img className="linen_img" src={linenShirts} alt="img" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ShopByTrend;
