import { useEffect, useState } from "react";
import "./App.css";
// import { Link } from "react-router-dom";
// import data from "./data/data.json";
// import Img1 from "./assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: CategoryImage;
  category: string;
  categoryImage: CategoryImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Include[];
  gallery: Gallery;
  others: Other[];
}

export interface CategoryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Gallery {
  first: CategoryImage;
  second: CategoryImage;
  third: CategoryImage;
}

export interface Include {
  quantity: number;
  item: string;
}

export interface Other {
  slug: string;
  name: string;
  image: CategoryImage;
}

function App() {
  const [prods, setProds] = useState<null | Product[]>(null);

  const getData = async () => {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    setProds(data);

    console.log(data);
  };

  const postData = async () => {
    const res = await fetch("http://localhost:3000/products", {
      method: "POST",
      body: JSON.stringify({
        id: "7",
        name: "Headphone 123",
      }),
    });

    const data = await res.json();

    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2 className="heading">Hello</h2>
      <button onClick={() => postData()}>Post data</button>

      {/* <img src={Img1} alt="" /> */}

      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        excepturi eum sint saepe quis, omnis veniam alias est iure, ducimus
        repellat tempore. Dolore quos earum, delectus libero omnis repellendus
        nostrum?
      </h1>

      {prods
        ?.filter((prod) => prod?.category === "headphones")
        .map((prod) => {
          return (
            <div key={prod.id}>
              <p>{prod.name}</p>
              <img
                src={`http://localhost:5173/${prod.categoryImage.desktop}`}
                alt=""
              />
            </div>
          );
        })}
    </>
  );
}

export default App;
