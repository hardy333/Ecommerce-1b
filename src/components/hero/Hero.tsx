import "./hero.css";
import Button from "../ui/button/Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p>NEW PRODUCT</p>
          <h1>XX99 Mark II HeadphoneS</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          {/* <Link to="/products/headphones/2">See Product</Link> */}
          <Button isLink={true} to="/products/headphones/2" type="primary">
            See Product
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
