import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./Header.css";
const Header = () => {
  const [response, setResponse] = useState("");
  useEffect(function banerapi() {
    try {
      fetch(
        "https://sy.pimkm.greenhonchos.com/pim/pimresponse.php/?service=banner_slider&store=1"
      )
        .then((res) => res.json())
        .then((data) => setResponse(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const img =
    response &&
    response.result.map((res) => {
      return (
        <div key={res.id_banner} className="slide-box">
          <img className="banner-img" src={res.image} alt="" />
        </div>
      );
    });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // console.log(response.result);
  return <div className="slider">{<Slider {...settings}>{img}</Slider>}</div>;
};
export default Header;
