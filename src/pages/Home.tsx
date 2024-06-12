import { ChangeEvent, useEffect, useState } from "react";
import Hero from "../components/hero/Hero";
import ProductsSection from "../components/poducts-section/ProductsSection";
import SpeakerSection from "../components/speaker-section/SpeakerSection";
import Input from "../components/ui/input/Input";
import NumberInput from "../components/ui/number-input/NumberInput";

const Home = () => {
  const [num, setNum] = useState(2);
  const [num2, setNum2] = useState(2);
  const [file, setFile] = useState<File | null>(null);

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    console.log(files);
    if (files) setFile(files[0]);
  };

  useEffect(() => {
    window.addEventListener("click", () => {
      // console.log(file);
    });
  }, [file]);

  return (
    <>
      <input
        type={"file"}
        // multiple={false}
        accept="application/json"
        onChange={handleChangeFile}
      />

      <input type="file" />
      <Hero />
      <ProductsSection />
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
          placeholder="Enter Name"
          name="abc"
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
        <NumberInput num={num} setNum={setNum} />
        <NumberInput num={num2} setNum={setNum2} />
      </div>
    </>
  );
};

export default Home;
