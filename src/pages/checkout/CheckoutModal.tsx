import { Dispatch, useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import CheckoutProductItem from "./checkout-product-item/CheckoutProductItem";

type Props = {
  modalIsOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

const CheckoutModal = ({ modalIsOpen, setIsOpen }: Props) => {
  const [showAll, setShowAll] = useState(false);

  const cart = useSelector((state: RootState) => state.cart.value);

  return (
    <Modal
      closeTimeoutMS={500}
      onRequestClose={() => setIsOpen(false)}
      onAfterOpen={() => (document.body.style.overflow = "hidden")}
      onAfterClose={() => (document.body.style.overflow = "auto")}
      shouldCloseOnOverlayClick={true}
      isOpen={modalIsOpen}
      className="checkout-modal"
    >
      <img src="" alt="" />

      <h2>Lorem ipsum dolor sit.</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing Lorem, ipsum.</p>

      <section className="modal-main-container">
        {/* Left */}
        <div className="left">
          {cart
            .filter((_, index) => (showAll ? true : index === 0))
            .map((item) => {
              return <CheckoutProductItem item={item} />;
            })}
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show less" : `and ${cart.length - 1} other items(s)`}
          </button>
        </div>
        {/* Right */}
        <div className="right">
          <p>grand Total</p>
          <p>
            {cart.reduce(
              (sum, item) => sum + item.product.price * item.amount,
              0
            )}
          </p>
        </div>
      </section>
    </Modal>
  );
};

export default CheckoutModal;
