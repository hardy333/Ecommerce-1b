import { useState } from "react";
import CheckoutModal from "./CheckoutModal";
import { useNavigate } from "react-router-dom";
import "./checkout.css";
import Input from "../../components/ui/input/Input";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Button from "../../components/ui/button/Button";
import { useForm } from "react-hook-form";
import CheckoutProductItem from "./checkout-product-item/CheckoutProductItem";

type FormData = {
  name: string;
  email: string;
  superHero: string;
  phoneNumber: number;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  eMouneyNumber: number;
  eMoneyPin: number;
};

const Checkout = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [paymentMethod, setPayementMethod] = useState<"e-money" | "cash">(
    "e-money"
  );

  const cart = useSelector((state: RootState) => state.cart.value);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);

    setIsOpen(true);
  };

  console.log(register("name"));

  return (
    <section className="checkout">
      <div className="container checkout-container">
        <button onClick={() => navigate(-1)}>Go Back</button>
        <form
          noValidate={true}
          onSubmit={handleSubmit(onSubmit)}
          className="checkout-content"
        >
          {/* Left form Section */}
          <main className="checkout-form">
            <h1>Checkout</h1>

            {/* 1)  */}
            <section className="form-group">
              <h2>billing details</h2>

              <section className="form-group-input-container">
                <Input
                  label={"Name"}
                  placeholder="Enter Yout Name"
                  type="text"
                  {...register("name", {
                    required: "Enter Name !!!",
                    minLength: {
                      value: 2,
                      message:
                        "Your name should contains at least two characters",
                    },
                  })}
                  isError={Boolean(errors.name)}
                  errMsg={errors.name?.message}
                />
                <Input
                  label={"Email"}
                  placeholder="Enter Yout Email"
                  type="email"
                  {...register("email", {
                    required: true,
                    // pattern: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/g,
                    pattern: {
                      value:
                        /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/g,
                      message: "Please enter valid email",
                    },
                  })}
                  isError={Boolean(errors.email)}
                  errMsg={errors.email?.message}
                />
                <Input
                  label={"Phone Number"}
                  placeholder="+1 (202) 555-0136"
                  type="number"
                  {...register("phoneNumber", {
                    required: "Enter phone number !!!",
                  })}
                  isError={Boolean(errors.phoneNumber)}
                  errMsg={errors.phoneNumber?.message}
                />
              </section>
            </section>
            {/* 2)  */}
            <section className="form-group form-group-shipping">
              <h2>shipping info</h2>
              <section className="form-group-input-container">
                <Input
                  label={"Address"}
                  placeholder="1137 Williams Avenue"
                  type="text"
                  {...register("address", {
                    required: "Enter address !!!",
                  })}
                  isError={Boolean(errors.address)}
                  errMsg={errors.address?.message}
                />
                <Input
                  label={"ZIP Code"}
                  placeholder="03333"
                  type="text"
                  {...register("zipCode", {
                    required: "Enter zip code !!!",
                  })}
                  isError={Boolean(errors.zipCode)}
                  errMsg={errors.zipCode?.message}
                />
                <Input
                  label={"City"}
                  placeholder="New york"
                  type="text"
                  {...register("city", {
                    required: "Enter city !!!",
                  })}
                  isError={Boolean(errors.city)}
                  errMsg={errors.city?.message}
                />
                <Input
                  label={"Country"}
                  placeholder="unitied States"
                  type="text"
                  {...register("country", {
                    required: "Enter country !!!",
                  })}
                  isError={Boolean(errors.country)}
                  errMsg={errors.country?.message}
                />
              </section>
            </section>
            {/* 2)  */}
            <section className="form-group form-group-payement">
              <h2>payment details</h2>
              <section className="form-group-input-container">
                <p className="form-group-inner-label">Payment Method</p>
                <div className="radio-inputs-container">
                  <Input
                    name="payement-method"
                    label={"e-Money"}
                    type="radio"
                    checked={paymentMethod === "e-money"}
                    onChange={() => setPayementMethod("e-money")}
                  />
                  <Input
                    name="payement-method"
                    checked={paymentMethod === "cash"}
                    label={"Cash on Delivery"}
                    type="radio"
                    onChange={() => setPayementMethod("cash")}
                  />
                </div>
                {paymentMethod === "e-money" ? (
                  <>
                    <Input
                      label={"e-Money Number"}
                      placeholder="324233423"
                      type="number"
                      {...register("eMouneyNumber", {
                        required: "Enter eMouneyNumber !!!",
                      })}
                      isError={Boolean(errors.eMouneyNumber)}
                      errMsg={errors.eMouneyNumber?.message}
                    />
                    <Input
                      label={"e-Money PIN"}
                      placeholder="38673"
                      type="number"
                      {...register("eMoneyPin", {
                        required: "Enter eMoneyPin !!!",
                      })}
                      isError={Boolean(errors.eMoneyPin)}
                      errMsg={errors.eMoneyPin?.message}
                    />
                  </>
                ) : null}
              </section>
            </section>
            {paymentMethod === "cash" && (
              <footer className="checkout-form-footer">
                {/* <img alt="" /> */}
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </footer>
            )}
          </main>
          {/* right aside Section */}
          <aside className="checkout-aside">
            <h2>SUMMARY</h2>

            <section className="checkout-product-item-container">
              {cart.map((item) => {
                return <CheckoutProductItem item={item} />;
              })}
            </section>

            <Button variant="primary">Continue</Button>
          </aside>
        </form>
      </div>

      <CheckoutModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default Checkout;

// type Props = {
//   modalIsOpen: boolean;
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
// };

// const ModalComponent = forwardRef(
//   (props: Props, ref: LegacyRef<ReactModal>) => (
//     <Modal
//       ref={ref}
//       contentRef={(node) => {
//         console.log(node);
//       }}
//       onRequestClose={() => props.setIsOpen(false)}
//       onAfterOpen={() => (document.body.style.overflow = "hidden")}
//       onAfterClose={() => (document.body.style.overflow = "auto")}
//       shouldCloseOnOverlayClick={true}
//       isOpen={props.modalIsOpen}
//       className="checkout-modal"
//     >
//       <button>djkdjk</button>
//       <div>I am a modal</div>
//       <h2>Lorem ipsum dolor sit.</h2>
//       <p>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni placeat
//         eum, iusto perspiciatis delectus, harum quibusdam, fugiat deleniti dolor
//         quae veniam incidunt explicabo cum! Natus quaerat a fuga tenetur
//         officiis.
//       </p>
//       <a href="">dkjdkj</a>
//       <button>kjdhd</button>
//       <button onClick={() => props.setIsOpen(false)}>close</button>
//     </Modal>
//   )
// );

// const DivComp = forwardRef(
//   (props, ref: LegacyRef<HTMLDivElement> | undefined) => {
//     return (
//       <div ref={ref}>
//         <p>Lorem ipsum dolor sit amet.</p>
//       </div>
//     );
//   }
// );

// const MotionDivComp = motion(DivComp);
