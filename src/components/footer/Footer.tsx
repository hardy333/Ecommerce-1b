import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-container">
        {/* Left */}
        <div className="footer-text">
          <h2>Audiophile</h2>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
        {/* Right */}
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="products/headphones">Headphones</Link>
            <Link to="products/speakers">Speakers</Link>
            <Link to="products/earphones">earphones</Link>
          </nav>
          <ul>
            <li>F</li>
            <li>T</li>
            <li>i</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
