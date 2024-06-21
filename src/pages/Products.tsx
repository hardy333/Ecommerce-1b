// import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductsSection from "../components/poducts-section/ProductsSection";
import "./products.css";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export interface ProductType {
  id: string;
  slug: string;
  name: string;
  image: CategoryImage;
  category: string;
  categoryImage: CategoryImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Include[];
  gallery: Gallery;
  others: Other[];
}

export interface CategoryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Gallery {
  first: CategoryImage;
  second: CategoryImage;
  third: CategoryImage;
}

export interface Include {
  quantity: number;
  item: string;
}

export interface Other {
  slug: string;
  name: string;
  image: CategoryImage;
}

const postsUrl = "https://jsonplaceholder.typicode.com/posts";
const productsUrl = "http://localhost:3000/products";
const getData = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

const Products = () => {
  const { productName } = useParams();
  // const [prods, setProds] = useState<null | ProductType[]>(null);
  // const [isLoading, setIsLoading] = useState(true);

  const {
    data,
    isError,
    error,
    isLoading,
    refetch: refetchProducts,
  } = useQuery<ProductType[]>({
    queryKey: ["products"],
    queryFn: () => getData(productsUrl),
    // enabled: false,
  });

  const {
    data: posts,
    isError: postsIsError,
    error: postsError,
    isLoading: postsIsLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getData(postsUrl),
  });

  // if (query.isLoading) {
  //   return <h1>Loading ...</h1>;
  // }
  // useEffect(() => {
  //   refetchProducts();
  // }, []);

  return (
    <>
      <div>
        <h1>{productName}</h1>
      </div>

      <button onClick={() => refetchProducts()}>Get data</button>

      <div className="container">
        {data
          ?.filter((prod: ProductType) => prod?.category === productName)
          .map((prod: ProductType) => {
            return (
              <div key={prod.id} className="product-container">
                <img
                  src={`http://localhost:5173/${prod.categoryImage.desktop}`}
                  alt=""
                />
                <p>{prod.name}</p>
                <Link to={`/products/${productName}/${prod.id}`}>
                  See More info
                </Link>
              </div>
            );
          })}
      </div>

      <ProductsSection />
    </>
  );
};

export default Products;
