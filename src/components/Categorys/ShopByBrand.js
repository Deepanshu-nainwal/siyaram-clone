import React, { useEffect, useState } from "react";
import CategoryDetail from "./CategoryDetail";
import useHttp from "../Hooks/UseHttp";
import Footer from "../Fotter/Footer";
import { useNavigate } from "react-router-dom";
import "./ShopByBrand.css";
function ShopByBrand() {
  const [active, setActive] = useState();
  const [activeFilter, setActiveFilter] = useState("");
  const [value, setValue] = useState(false);
  const {
    response,
    filterData,
    error,
    apiHandler: sendReq,
  } = useHttp({
    url: "https://sy.pimkm.greenhonchos.com/pim/pimresponse.php/?service=category&store=1&url_key=shop-by-brand&page=1&count=16&sort_by=product_position&sort_dir=desc&filter=",
  });
  useEffect(() => {
    sendReq();
  }, []);
  const navigate = useNavigate();
  const setNavigate = (res) => {
    navigate("siyaram/shopbybrand/chartpage", {
      state: { data: res },
    });
  };
  const setClasshandler = (event) => {
    setActive(event);
  };

  const products =
    response &&
    response.result.products.map((res, index) => {
      return (
        <div
          onClick={setNavigate.bind(this, res)}
          onMouseOver={setClasshandler.bind(this, index)}
          onMouseLeave={setClasshandler}
          className={`sbb_product-img_div`}
          key={index}
        >
          <img className={`bw_product-img  `} src={res.image} alt="" />
          <div
            className={`sbb_hover_block ${active === index ? "active" : null}`}
          >
            <button onClick={setNavigate} className="sbb_view_details_btn">
              View Details
            </button>
            <p className="sbb_size_text">Size-</p>
            <p className="sbb_size">M/38 L/40 XL/42 XXL/44</p>
          </div>

          <p className="sbb_product-name">{res.name}</p>
          <p className="sbb_product-price">
            Rs. <span>{res.price}</span>
          </p>
        </div>
      );
    });

  const toggleHandler = (event) => {
    // console.log("this ", event);
    setValue((value) => !value);
    setActiveFilter(event);
  };

  // function for filrer Section------>

  const filters =
    filterData &&
    filterData.map((data, index) => {
      return (
        <li
          onClick={toggleHandler.bind(this, data.filter_lable)}
          id={index}
          key={index}
          className={`sbb_filters ${
            activeFilter === data.filter_lable && value ? "active" : ""
          }`}
        >
          {data.filter_lable} &darr;
          <ul id={index} className={`sbb_filter_content `}>
            {Object.keys(data?.options).map((key, index) => {
              return <li key={index}>{data?.options[key].value}</li>;
            })}
          </ul>
        </li>
      );
    });
  //==================================================================================

  return (
    <div>
      {response && (
        <CategoryDetail
          name={response.result.name}
          totalItem={response.result.products.length}
        />
      )}
      <div className="sbb_filters_products_div">
        <div className="sbb_filters_div">{filters}</div>

        <div className="sbb_products-imgs_div">{products} </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShopByBrand;
