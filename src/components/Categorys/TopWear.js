import React, { useState, useEffect, useMemo } from "react";
import CategoryDetail from "./CategoryDetail";
import Footer from "../Fotter/Footer";
import { Link, useNavigate } from "react-router-dom";
import useHttp from "../Hooks/UseHttp";

import "./TopWear.css";
function TopWear() {
  // const [response, setResponse] = useState("");
  // const [filterData, setFilterData] = useState("");
  // const [error, setError] = useState("");
  const [active, setActive] = useState();
  const [activeFilter, setActiveFilter] = useState("");
  const [value, setValue] = useState(false);
  const {
    response,
    filterData,
    error,
    isLoding,
    apiHandler: sendApi,
  } = useHttp({
    url: "https://sy.pimkm.greenhonchos.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear&page=1&count=16&sort_by=product_position&sort_dir=desc&filter=",
  });
  useEffect(() => {
    sendApi();
  }, []);
  // WE USED COUSTOM HOOK THERE SO WE COMMENT OUT THE USE EFFECT FUNCTION DOWN HERE------>
  // useEffect(function apiHandler() {
  //   try {
  //     fetch(
  //       "https://pim.siyaram.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear&page=1&count=16&sort_by=product_position&sort_dir=desc&filter="
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setResponse(data);
  //         setFilterData(data.result.filters);
  //       });
  //   } catch (err) {
  //     setError(err, "somthing went wrong");
  //   }
  // }, []);
  // ---------------------------------------------------------------------------->

  // // console.log("response", response);
  const navigate = useNavigate();
  const setNavigate = (res) => {
    navigate("siyaram/topwear/chartpage", {
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
          className={`product-img_div`}
          key={index}
        >
          <img className={`product-img  `} src={res.image} alt="" />
          <div className={`hover_block ${active === index ? "active" : null}`}>
            <button onClick={setNavigate} className="view_details_btn">
              View Details
            </button>
            <p className="size_text">Size-</p>
            <p className="size">M/38 L/40 XL/42 XXL/44</p>
          </div>

          <p className="product-name">{res.name}</p>
          <p className="product-price">
            Rs. <span>{res.price}</span>
          </p>
        </div>
      );
    });

  const toggleHandler = (event) => {
    // console.log("this ", event);
    // setValue((value) => !value);
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
          className={`filters ${
            activeFilter === data.filter_lable ? "active" : ""
          }`}
        >
          {data.filter_lable} &darr;
          <ul id={index} className={`filter_content `}>
            {Object.keys(data?.options).map((key, index) => {
              return <li key={index}>{data?.options[key].value}</li>;
            })}
          </ul>
        </li>
      );
    });
  return (
    <div>
      {response && (
        <CategoryDetail
          name={response.result.name}
          totalItem={response.result.products.length}
        />
      )}
      {isLoding === false ? (
        <div className="filters_products_div">
          <div className="filters_div">
            <ul>{filters}</ul>
          </div>

          <div className="products-imgs_div">{products} </div>
        </div>
      ) : (
        <h1>Loding.....</h1>
      )}
      <Footer />
    </div>
  );
}
export default TopWear;
