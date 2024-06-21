import { motion } from "framer-motion";
import { LegacyRef, forwardRef, useState } from "react";
import ReactModal from "react-modal";
import Modal from "react-modal";

const Checkout = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>Checkout</h1>
      <button onClick={() => setIsOpen(true)}>Continue</button>
      <MotionDivComp
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      />

      {/* <MotionModalComponent
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          bounce: 0.5,
        }}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      /> */}

      <Modal
        closeTimeoutMS={500}
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

type Props = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalComponent = forwardRef(
  (props: Props, ref: LegacyRef<ReactModal>) => (
    <Modal
      ref={ref}
      contentRef={(node) => {
        console.log(node);
      }}
      onRequestClose={() => props.setIsOpen(false)}
      onAfterOpen={() => (document.body.style.overflow = "hidden")}
      onAfterClose={() => (document.body.style.overflow = "auto")}
      shouldCloseOnOverlayClick={true}
      isOpen={props.modalIsOpen}
      className="checkout-modal"
    >
      <button>djkdjk</button>
      <div>I am a modal</div>
      <h2>Lorem ipsum dolor sit.</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni placeat
        eum, iusto perspiciatis delectus, harum quibusdam, fugiat deleniti dolor
        quae veniam incidunt explicabo cum! Natus quaerat a fuga tenetur
        officiis.
      </p>
      <a href="">dkjdkj</a>
      <button>kjdhd</button>
      <button onClick={() => props.setIsOpen(false)}>close</button>
    </Modal>
  )
);

const DivComp = forwardRef(
  (props, ref: LegacyRef<HTMLDivElement> | undefined) => {
    return (
      <div ref={ref}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    );
  }
);

const MotionDivComp = motion(DivComp);

const MotionModalComponent = motion(ModalComponent);
