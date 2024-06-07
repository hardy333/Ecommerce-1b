import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container navbar-container">
        <a className="navbar-logo" href="">
          Audiophile
        </a>
        <nav className="navbar-links">
          <a href="#">Home</a>
          <a href="#">Headphone</a>
          <a href="#">Speakers</a>
          <a href="#">Earphone</a>
        </nav>
        <button className="navbar-cart-btn">Cart</button>
      </div>
    </div>
  );
};

export default Navbar;
