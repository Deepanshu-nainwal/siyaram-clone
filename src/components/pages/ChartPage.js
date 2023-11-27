import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Footer from "../Fotter/Footer";
import "./ChartPages.css";
function Chartpage(props) {
  const [activ, setActiv] = useState(null);
  const [id, setId] = useState();
  const activeHandler = (e) => {
    setId(e.target.id);
    setActiv((activ) => !activ);
  };

  const location = useLocation().state.data;
  console.log(location);
  const imgs = location.gallery.map((img) => {
    // console.log(url.image);
    return (
      <div className="iimg" key={img.position}>
        <img className="img" src={img.image} alt="" />
      </div>
    );
  });
  const colorOpt = location.color_options.map((opt) => (
    <img src={opt.image} alt="" />
  ));

  return (
    <div>
      <div className="top_stuff">
        <div>
          <Link className="link_tag" to={"/"}>
            Home /
          </Link>
        </div>
        <div>
          <Link className="link_tag" to={"/siyaram/49"}>
            {location.article_type} /
          </Link>
        </div>
        <p className="prduct_name">{location.name}</p>
      </div>
      <section className="body">
        <div className="imgs_div">{imgs}</div>
        <div className="info_div">
          <p className="product_artical">{location.name}</p>
          <p className="product_price">{location.price}</p>
          <div className="offer_stuff_div">
            <p className="inclusiv-text">inclusive of all taxes</p>
            <p className="best-offer">Best Offers </p>
            <div className="offer_tag">
              <p className="use-code">USE CODE : FEST10 </p>
              <p className="off">Get 10% Off On Your Order! </p>
            </div>
            <p className="colors">AVAILABLE COLORS </p>
            {/* <div className="color_opt_div">{colorOpt}</div> */}
            <p className="size_text">SELECT SIZE</p>
            <label
              id="1"
              onClick={activeHandler}
              // className={`size_lable ${!activ ? "" : "active"}`}
              className={`size_lable ${id == "1" && activ ? "active" : ""}`}
              htmlFor=""
            >
              M/38
            </label>
            <label
              id="2"
              onClick={activeHandler}
              className={`size_lable ${id == "2" && activ ? "active" : ""}`}
              htmlFor=""
            >
              L/40
            </label>
            <label
              id="3"
              onClick={activeHandler}
              className={`size_lable ${id == "3" && activ ? "active" : ""}`}
              htmlFor=""
            >
              XL/42
            </label>
            <label
              id="4"
              onClick={activeHandler}
              className={`size_lable ${id == "4" && activ ? "active" : ""}`}
              htmlFor=""
            >
              XXL/44
            </label>

            <Link to="/siyaram/41" className="size_guide">
              SIZE GUIDE
            </Link>
          </div>
          <div className="btn_div">
            <button className="add_cart">ADD TO CART</button>
            <button className="wish_list">WISHLIST</button>
          </div>
          <p className="dilivery_option">DELIVERY OPTIONS</p>
          <input
            className="check_pincode"
            placeholder="CHECK PINCODE"
            type="text"
          />
          <h2 className="product_description">Product Details</h2>
          <p className="product_description_text">{location.description}</p>
          <div className="demo">
            <ul className="product_details">
              <li className="demo_detail">
                <span className="product_qualiti">Fabric</span>
                <span className="qualiti">{location.fabric}</span>
              </li>
              <li className="demo_detail">
                <span className="product_qualiti">Fit</span>
                <span className="qualiti">{location.fit}</span>
              </li>
              <li className="demo_detail">
                <span className="product_qualiti">Color</span>
                <span className="qualiti">{location.color_family}</span>
              </li>
              <li className="demo_detail">
                <span className="product_qualiti">Print or Pattern Type</span>
                <span className="qualiti">{location.pattern}</span>
              </li>
              <li className="demo_detail">
                <span className="product_qualiti">Shade</span>
                <span className="qualiti">?....</span>
              </li>
              <li className="demo_detail">
                <span className="product_qualiti">Manufacturing</span>
                <span className="qualiti">Made in India</span>
              </li>
            </ul>
          </div>
          <p className="product_code_pera">
            <span className="product_code_text">Product Code:</span>
            <span className="product_code_code">{location.group_id}</span>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Chartpage;
