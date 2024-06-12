import { cartItemType } from "../../context/CartContext";
import NumberInput from "../ui/number-input/NumberInput";
import { ProductType } from "../../pages/Products";

type Props = {
  item: cartItemType;
  updateCart: (num: number, prod: ProductType) => void;
};

const CartItem = ({ item, updateCart }: Props) => {
  return (
    <>
      <div
        className="inner-product-container"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          margin: "50px 0",
        }}
      >
        <img
          width={50}
          src={`http://localhost:5173/${item.product?.categoryImage.desktop}`}
          alt=""
        />
        <div>
          <p>Prod name - {item.product?.name}</p>
          <NumberInput
            minNum={0}
            num={item.amount}
            setNum={(num: number) => updateCart(num, item.product)}
          />
          {/* <Button onClick={() => updateCart(num, item.product)}>
            ADD TO CART
          </Button> */}
        </div>
      </div>
    </>
  );
};

export default CartItem;
