import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryDetail from "./CategoryDetail";
import Footer from "../Fotter/Footer";
import useHttp from "../Hooks/UseHttp";
import "./BottomWear.css";
function BottomWear() {
  const [active, setActive] = useState();
  const [activeFilter, setActiveFilter] = useState("");
  const [value, setValue] = useState(false);
  // customhook-------
  const {
    response,
    filterData,
    error,
    apiHandler: sendapi,
  } = useHttp({
    url: "https://sy.pimkm.greenhonchos.com/pim/pimresponse.php/?service=category&store=1&url_key=bottom-wear&page=1&count=16&sort_by=product_position&sort_dir=desc&filter=",
  });
  useEffect(() => {
    sendapi();
  }, []);
  // ====================================================================================
  // const products =
  //   response &&
  //   response.result.products.map((res) => {
  //     return (
  //       // the Bw ifront of all classes shows the BottomWear(BW) component classes
  //       <div className="bw_product-img_div">
  //         <img
  //           className="bw_product-img"
  //           key={res.id_product}
  //           src={res.image}
  //           alt=""
  //         />
  //         <p className="bw_product-name">{res.name}</p>
  //         <p className="bw_product-price">
  //           Rs. <span>{res.price}</span>
  //         </p>
  //       </div>
  //     );
  //   });
  // //   console.log(filterData);
  // // function for filrer
  // const filters =
  //   filterData &&
  //   filterData.map((data) => {
  //     return <li className="bw_filters"> {data.filter_lable} &darr; </li>;
  //   });
  // =======================================================================================
  const navigate = useNavigate();
  const setNavigate = (res) => {
    navigate("siyaram/bottomwear/chartpage", {
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
          className={`bw_product-img_div`}
          key={index}
        >
          <img className={`bw_product-img  `} src={res.image} alt="" />
          <div
            className={`bw_hover_block ${active === index ? "active" : null}`}
          >
            <button onClick={setNavigate} className="bw_view_details_btn">
              View Details
            </button>
            <p className="bw_size_text">Size-</p>
            <p className="bw_size">M/38 L/40 XL/42 XXL/44</p>
          </div>

          <p className="bw_product-name">{res.name}</p>
          <p className="bw_product-price">
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
          className={`bw_filters ${
            activeFilter === data.filter_lable && value ? "active" : ""
          }`}
        >
          {data.filter_lable} &darr;
          <ul id={index} className={`bw_filter_content `}>
            {Object.keys(data?.options).map((key, index) => {
              return <li key={index}>{data?.options[key].value}</li>;
            })}
          </ul>
        </li>
      );
    });
  // =========================================-------------------------------------------
  return (
    <div>
      {response && (
        <CategoryDetail
          name={response.result.name}
          totalItem={response.result.products.length}
        />
      )}
      <div className="bw_filters_products_div">
        <div className="bw_filters_div">{filters}</div>

        <div className="bw_products-imgs_div">{products} </div>
      </div>
      <Footer />
    </div>
  );
}

export default BottomWear;
