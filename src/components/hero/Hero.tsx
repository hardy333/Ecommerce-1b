import "./hero.css";
import Button from "../ui/button/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [show, setShow] = useState(true);

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content" onClick={() => setShow(!show)}>
          <AnimatePresence mode={"popLayout"}>
            {show && (
              <motion.p
                key="p1"
                layout
                initial={{
                  x: -200,
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1 }}
                exit={{
                  x: -200,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0,
                  bounce: 0.5,
                  type: "spring",
                }}
              >
                NEW PRODUCT
              </motion.p>
            )}

            <motion.h1
              key="h1"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              layout
            >
              XX99 Mark II HeadphoneS
            </motion.h1>
            <motion.p
              key="p2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              layout
            >
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </motion.p>
          </AnimatePresence>

          {/* <Link to="/products/headphones/2">See Product</Link> */}
          <Button isLink={true} to="/products/headphones/2" type="primary">
            See Product
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
