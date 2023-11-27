import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavbarLink.css";
const NavbarLinks = (props) => {
  const [response, setResponse] = useState("");
  const [topWearresponse, setTopWearResponse] = useState("");
  // const clickHandler = (e) => {
  //   props.parentTochld("e.target.key");
  // };
  useEffect(function navLInk() {
    fetch(
      "https://sy.pimkm.greenhonchos.com/pim/pimresponse.php/?service=menu&store=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
      });
  }, []);

  // console.log(response.result);
  const idTaker = (e) => {
    props.getId("e.target.id");
    console.log(e.target.id);
  };
  const result =
    response &&
    response.result.map((data) => (
      <Link
        to={`/siyaram/${data.id_category}`}
        onClick={idTaker}
        id={data.id_category}
        key={data.id_category}
        className="link"
      >
        {data.name}
      </Link>
    ));

  return <div className="nav-links">{result}</div>;
};
export default NavbarLinks;
