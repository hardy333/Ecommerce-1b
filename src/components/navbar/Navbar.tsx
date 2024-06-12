import { useContext, useState } from "react";
import "./navbar.css";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { CartConntext, cartContextType } from "../../context/CartContext";
import CartItem from "../cartItem/CartItem";

const Navbar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { cart, updateCart } = useContext(CartConntext) as cartContextType;

  return (
    <>
      <div className="navbar">
        <div className="container navbar-container">
          <a className="navbar-logo" href="">
            Audiophile
          </a>
          <nav className="navbar-links" style={{ display: " flex", gap: 20 }}>
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
      <Modal
        className="cart-modal"
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick={true}
        isOpen={modalIsOpen}
        onAfterOpen={() => (document.body.style.overflow = "hidden")}
        onAfterClose={() => (document.body.style.overflow = "auto")}
      >
        <div>
          {cart.map((item) => {
            return <CartItem updateCart={updateCart} item={item} />;
          })}
        </div>

        <button onClick={() => setIsOpen(false)}>close</button>
      </Modal>
    </>
  );
};

export default Navbar;
