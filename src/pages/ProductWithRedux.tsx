import { useParams } from "react-router-dom";
import { ProductType } from "./Products";
import { useEffect, useState } from "react";

import "./product.css";
import NumberInput from "../components/ui/number-input/NumberInput";
import Button from "../components/ui/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { updateCart } from "../features/cart/cartSlice";

const ProductWithRedux = () => {
  const { productId } = useParams();
  const [prod, setProd] = useState<null | ProductType>(null);
  const cart = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  const item = cart.find((item) => item.product.id === productId);

  const [num, setNum] = useState(() => {
    if (item) return item.amount;
    return 1;
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
  console.log(prod?.categoryImage.desktop);

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
        <img width={300} src={`/${prod?.categoryImage.desktop}`} alt="" />
        <div>
          <p>Product - {productId}</p>
          <h2>Prod name - {prod?.name}</h2>
          <NumberInput minNum={1} num={num} setNum={setNum} />

          {prod && (
            <Button
              onClick={() => dispatch(updateCart({ amount: num, prod: prod }))}
            >
              ADD TO CART
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductWithRedux;
