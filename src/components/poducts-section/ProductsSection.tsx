import "./products-section.css";
import HeadphoneImg from "../../assets/headphone.png";
import ProductCard from "./ProductCard";

export type ProdType = {
  name: string;
  link: string;
  img: string;
};

const products: ProdType[] = [
  {
    name: "HEADPHONES",
    link: "/products/headphones",
    img: HeadphoneImg,
  },
  {
    name: "Speakers",
    link: "/products/speakers",
    img: HeadphoneImg,
  },
  {
    name: "Earphones",
    link: "/products/earphones",
    img: HeadphoneImg,
  },
];

const ProductsSection = ({ bgColor }: { bgColor?: string }) => {
  return (
    <section style={{ background: bgColor }} className="products-section">
      <div className="container products-section-container">
        {products.map((prod, index) => {
          return <ProductCard index={index} key={prod.link} prod={prod} />;
        })}
      </div>
    </section>
  );
};

export default ProductsSection;
