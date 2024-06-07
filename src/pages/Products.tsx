// import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export interface ProductType {
  id: number;
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

const Products = () => {
  const { productName } = useParams();
  // const [prods, setProds] = useState<null | ProductType[]>(null);
  // const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    return data;
  };

  const { data } = useQuery<ProductType[]>({
    queryKey: ["products", productName],
    queryFn: getData,
  });

  // if (query.isLoading) {
  //   return <h1>Loading ...</h1>;
  // }
  return (
    <>
      {data
        ?.filter((prod: ProductType) => prod?.category === productName)
        .map((prod: ProductType) => {
          return (
            <div key={prod.id}>
              <p>{prod.name}</p>
              <img
                src={`http://localhost:5173/${prod.categoryImage.desktop}`}
                alt=""
              />
            </div>
          );
        })}
    </>
  );
};

export default Products;
