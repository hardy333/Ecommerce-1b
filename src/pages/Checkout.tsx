import { useState } from "react";
import Modal from "react-modal";

const Checkout = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>Checkout</h1>
      <button onClick={() => setIsOpen(true)}>Continue</button>

      <Modal
        onRequestClose={() => setIsOpen(false)}
        onAfterOpen={() => (document.body.style.overflow = "hidden")}
        onAfterClose={() => (document.body.style.overflow = "auto")}
        shouldCloseOnOverlayClick={true}
        isOpen={modalIsOpen}
        className="checkout-modal"
      >
        <button>djkdjk</button>
        <div>I am a modal</div>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
          placeat eum, iusto perspiciatis delectus, harum quibusdam, fugiat
          deleniti dolor quae veniam incidunt explicabo cum! Natus quaerat a
          fuga tenetur officiis.
        </p>
        <a href="">dkjdkj</a>
        <button>kjdhd</button>
        <button onClick={() => setIsOpen(false)}>close</button>
      </Modal>
    </div>
  );
};

export default Checkout;
