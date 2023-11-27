import React from "react";
import { Link } from "react-router-dom";
import "./CategoryDetail.css";
function CategoryDetail(props) {
  return (
    <div className="CategoryDetails">
      <div className="detail-first_div">
        <Link to="/" className="home-text">
          Home
        </Link>

        <li className="title-text">/ {props.name}</li>
      </div>
      <div className="detail-sec_div">
        <li className="category-name">{props.name}</li>
        <li className="total-items"> - {props.totalItem}</li>
      </div>
      <div className="detail-third_div">
        <h4 className="filters-text">FILTERS</h4>
        <select className="select-tag" name="short by:option" id="1">
          <option className="option" value="">
            Short by : popularity
          </option>
          <option className="option" value="">
            price:High To low
          </option>
          <option className="option" value="">
            price:Low To High
          </option>
          <option className="option" value="">
            Discount
          </option>
          <option className="option" value="">
            Popularity
          </option>
          <option className="option" value="">
            Newest
          </option>
        </select>
      </div>
    </div>
  );
}
export default CategoryDetail;
