import Hero from "../components/hero/Hero";
import ProductsSection from "../components/poducts-section/ProductsSection";
import SpeakerSection from "../components/speaker-section/SpeakerSection";
import Input from "../components/ui/input/Input";

const gap = 96;

const Home = () => {
  return (
    <>
      <Hero />
      <div style={{ margin: `${gap}px 0` }}>
        <ProductsSection />
      </div>
      <div style={{ margin: `${gap}px 0` }}>
        <ProductsSection bgColor="red" />
      </div>
      <SpeakerSection />
      <div className="container" style={{ margin: 20 }}>
        <Input
          type="text"
          isError={true}
          label="Name"
          id="name"
          placeholder="Enter Name"
        />
        <br />
        <br />

        <Input
          type="radio"
          isError={true}
          label="cash"
          id="name"
          placeholder="dkjdld"
          name="lkjdlk"
        />
        <br />

        <Input
          name="abc"
          type="radio"
          isError={true}
          label="E pay"
          id="name"
          placeholder="Enter Name"
        />

        <input type="radio" name="payment-method" />
        <input type="radio" name="payment-method" />
        <input type="checkbox" />

        <br />
        <br />
      </div>
    </>
  );
};

export default Home;
