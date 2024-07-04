import { useContext } from "react";
import Modal from "react-modal";
import { CartConntext, cartContextType } from "../../context/CartContext";
import CartItem from "../cartItem/CartItem";
import Button from "../ui/button/Button";

type Props = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartComponent = ({ modalIsOpen, setIsOpen }: Props) => {
  const { cart, updateCart, clearCart } = useContext(
    CartConntext
  ) as cartContextType;

  return (
    <Modal
      className="cart-modal"
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      isOpen={modalIsOpen}
      onAfterOpen={() => (document.body.style.overflow = "hidden")}
      onAfterClose={() => (document.body.style.overflow = "auto")}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Cart ({cart.length})</p>

        {cart.length > 0 ? (
          <button onClick={() => clearCart()}>Remove All</button>
        ) : null}
      </div>

      <div>
        {cart.map((item) => {
          return <CartItem updateCart={updateCart} item={item} />;
        })}
      </div>
      <h4
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <p>Total</p>
        <p>
          $
          {cart.reduce(
            (sum, item) => sum + item.product.price * item.amount,
            0
          )}
        </p>
      </h4>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button to="/checkout" isLink={true}>
          {" "}
          CHeckout
        </Button>
      </div>
    </Modal>
  );
};

export default CartComponent;
