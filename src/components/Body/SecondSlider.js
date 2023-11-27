import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./SecondSlider.css";
const SecondSlider = () => {
  const [response, setResponse] = useState("");
  useEffect(function apiHandler() {
    try {
      fetch(
        "https://sy.pimkm.greenhonchos.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear&count=15&page=1&sort_by=product_position&sort_dir=desc&filter=fashion_type~Core"
      )
        .then((res) => res.json())
        .then((data) => setResponse(data));
    } catch (error) {
      console.log(error);
    }
  }, []);
  // console.log(response.result.products);
  const images =
    response &&
    response.result.products.map((res) => {
      return (
        <div key={res.id_product}>
          <img
            className="sec_slider_img"
            key={res.id_product}
            src={res.image}
            alt="img"
          />
        </div>
      );
    });

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="second-slider_main-div">
      <h1 className="second-slider_main-div_heading">
        Timeless Classics From The House Of Siyaram’s
      </h1>
      <p className="second-slider_main-div_pera">
        Exuding expert craftsmanship, check out the classiest bestsellers here.
      </p>
      <div className="sec-slider">
        <Slider {...settings}>{images}</Slider>
      </div>
    </div>
  );
};
export default SecondSlider;
