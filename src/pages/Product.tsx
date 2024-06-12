import { useParams } from "react-router-dom";
import { ProductType } from "./Products";
import { useContext, useEffect, useState } from "react";

import "./product.css";
import NumberInput from "../components/ui/number-input/NumberInput";
import { CartConntext, cartContextType } from "../context/CartContext";
import Button from "../components/ui/button/Button";

const Product = () => {
  const { productId } = useParams();
  const [prod, setProd] = useState<null | ProductType>(null);
  const { cart, updateCart } = useContext(CartConntext) as cartContextType;

  const item = cart.find((item) => item.product.id === productId);

  const [num, setNum] = useState(() => {
    if (item) return item.amount;
    return 0;
  });

  console.log(cart);
  const getData = async () => {
    const res = await fetch("http://localhost:3000/products/" + productId);
    const data = await res.json();
    setProd(data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (item?.amount) {
      setNum(item.amount);
    }
  }, [item?.amount]);

  return (
    <div className="container">
      <div
        className="inner-product-container"
        style={{
          display: "flex",
          gap: 20,
          margin: "50px 0",
        }}
      >
        <img
          width={300}
          src={`http://localhost:5173/${prod?.categoryImage.desktop}`}
          alt=""
        />
        <div>
          <p>Product - {productId}</p>
          <h2>Prod name - {prod?.name}</h2>
          <NumberInput minNum={1} num={num} setNum={setNum} />

          {prod &&
            (num !== item?.amount ? (
              <Button onClick={() => updateCart(num, prod)}>ADD TO CART</Button>
            ) : null)}
        </div>
      </div>
    </div>
  );
};

export default Product;
