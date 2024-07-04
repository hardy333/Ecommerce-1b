import Modal from "react-modal";
import CartItem from "../cartItem/CartItem";
import Button from "../ui/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { clearCart, updateCart } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

type Props = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartComponentWithRedux = ({ modalIsOpen, setIsOpen }: Props) => {
  const cart = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          <button
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Remove All
          </button>
        ) : null}
      </div>

      <div>
        {cart.map((item) => {
          return (
            <CartItem
              key={item.product.id}
              updateCart={(num, prod) =>
                dispatch(updateCart({ amount: num, prod: prod }))
              }
              item={item}
            />
          );
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
        <Button
          to="/checkout"
          onClick={() => {
            setIsOpen(false);
            navigate("/checkout");
          }}
        >
          {" "}
          CHeckout
        </Button>
      </div>
    </Modal>
  );
};

export default CartComponentWithRedux;
