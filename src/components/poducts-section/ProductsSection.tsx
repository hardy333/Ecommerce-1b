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

const ProductsSection = () => {
  return (
    <section className="products-section">
      <div className="container products-section-container">
        {products.map((prod) => {
          return <ProductCard key={prod.link} prod={prod} />;
        })}
      </div>
    </section>
  );
};

export default ProductsSection;
