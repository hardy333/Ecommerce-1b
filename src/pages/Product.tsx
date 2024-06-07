import { useParams } from "react-router-dom";
import { ProductType } from "./Products";
import { useEffect, useState } from "react";

const Product = () => {
  const { productId } = useParams();

  const [prod, setProd] = useState<null | ProductType>(null);

  const getData = async () => {
    const res = await fetch("http://localhost:3000/products/" + productId);
    const data = await res.json();
    setProd(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      Product - {productId}
      <h2>Prod name - {prod?.name}</h2>
    </div>
  );
};

export default Product;
