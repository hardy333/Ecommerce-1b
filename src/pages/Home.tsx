import Hero from "../components/hero/Hero";
import ProductsSection from "../components/poducts-section/ProductsSection";
import SpeakerSection from "../components/speaker-section/SpeakerSection";
import Input from "../components/ui/input/Input";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsSection />
      <SpeakerSection />
      <Input
        type="radio"
        isError={true}
        label="name"
        id="name"
        placeholder="Enter Name"
      />
    </>
  );
};

export default Home;
