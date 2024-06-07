import { Link } from "react-router-dom";
import { ProdType } from "./ProductsSection";
import Button from "../ui/button/Button";

type Props = {
  prod: ProdType;
};

const ProductCard = ({ prod }: Props) => {
  return (
    <article className="product-card">
      <img src={prod.img} alt="" />
      <h3>{prod.name}</h3>
      {/* <Link preventScrollReset={false}>
        Shop
      </Link> */}

      <Button to={prod.link} type="link">
        Shop
      </Button>
    </article>
  );
};

export default ProductCard;
