import { cartItem } from "../../../features/cart/cartSlice";
import "./checkout-product-item.css";

type Props = {
  item: cartItem;
};

const CheckoutProductItem = ({ item }: Props) => {
  return (
    <section className="checkout-product-item">
      <img src={`./${item.product.categoryImage.desktop}`} alt="" />
      <div className="info-div">
        <p>{item.product.name.split(" ").slice(0, -1).join(" ")}</p>
        <p className="price">{item.product.price}</p>
      </div>
      <p className="amount-div">x{item.amount}</p>
    </section>
  );
};

export default CheckoutProductItem;
