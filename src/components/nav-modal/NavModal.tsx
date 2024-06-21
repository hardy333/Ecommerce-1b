import Modal from "react-modal";
import "./nav-modal.css";
import ProductsSection from "../poducts-section/ProductsSection";

type Props = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavModal = ({ modalIsOpen, setIsOpen }: Props) => {
  return (
    <Modal
      onRequestClose={() => setIsOpen(false)}
      onAfterOpen={() => (document.body.style.overflow = "hidden")}
      onAfterClose={() => (document.body.style.overflow = "auto")}
      shouldCloseOnOverlayClick={true}
      isOpen={modalIsOpen}
      className="nav-modal"
    >
      <ProductsSection />
    </Modal>
  );
};

export default NavModal;
