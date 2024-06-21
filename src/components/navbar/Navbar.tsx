import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
// import CartComponent from "../cart-component/CartComponent";
import CartComponentWithRedux from "../cart-component/CartComponentWithRedux";
import NavModal from "../nav-modal/NavModal";

const Navbar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [navModalIsOpen, setNavModalIsOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="container navbar-container">
          <button
            onClick={() => setNavModalIsOpen(!navModalIsOpen)}
            className="nav-burger-btn"
          >
            X
          </button>
          <a className="navbar-logo" href="">
            Audiophile
          </a>
          <nav className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/products/headphones">Headphone</Link>
            <Link to="/products/speakers">Speakers</Link>
            <Link to="/products/earphones">Earphone</Link>
          </nav>
          <button onClick={() => setIsOpen(true)} className="navbar-cart-btn">
            Cart
          </button>
        </div>
      </div>

      {/* <CartComponent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} /> */}
      <CartComponentWithRedux modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />

      <NavModal modalIsOpen={navModalIsOpen} setIsOpen={setNavModalIsOpen} />
    </>
  );
};

export default Navbar;
