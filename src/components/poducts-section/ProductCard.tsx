import { ProdType } from "./ProductsSection";
import Button from "../ui/button/Button";
import { motion } from "framer-motion";

type Props = {
  prod: ProdType;
  index: number;
};

const ProductCard = ({ prod, index }: Props) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="product-card"
    >
      <img src={prod.img} alt="" />
      <h3>{prod.name}</h3>
      {/* <Link preventScrollReset={false}>
                        Shop
                        </Link> */}

      <Button to={prod.link} type="link" isLink={true}>
        Shop
      </Button>
    </motion.article>
  );
};

export default ProductCard;
