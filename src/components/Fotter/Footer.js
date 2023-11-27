import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className="discription">
        <p className="discription_pera">We'll pop in your inbox to say hi!</p>
        <h2 className="discription_heading">Our Newsletter</h2>
      </div>
      <div className="discription_input_div">
        <input
          className="discription_input"
          placeholder=" your email address"
          type="email"
        />
      </div>
      <div className="about_us_div">
        <h3 className="about_us"> About Us</h3>
        <p className="about_us_discription">
          We, at Siyaram’s, have carved a niche in the wardrobe and hearts of
          our loyalists for creating a melange of cultural intricacies & vogue.
          Today when we say “Come home to…”, the world says… “Siyaram's".
        </p>

        <Link className="readmore">Read more</Link>
      </div>
      <div className="footer_lists">
        <ul className="footer list-1">
          <li>BRANDS</li>
          <li>J. Hampstead</li>
          <li>Oxemberg</li>
          <li>Mozzo</li>
        </ul>
        <ul className="footer list-2">
          <li className="list_heading">COMPANY</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>FAQ</li>
          <li>Track Orders</li>
          <li>Blog</li>
        </ul>
        <ul className="footer list-3">
          <li className="list_heading">POLICIES</li>
          <li>Privacy Policy</li>
          <li>Return Policy</li>
          <li>Shipping Policy</li>
        </ul>
        <ul className="footer list-4 ">
          <li className="list_heading">Follow Us</li>

          <li className="fb ">FaceBook</li>

          <li className="insta">InstaGram</li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
