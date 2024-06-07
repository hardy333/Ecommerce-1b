import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Checkout from "../pages/Checkout";
import Notfound from "../pages/404";
import Layout from "../layout/Layout";
// import Layout from "../layout/Layout";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productName" element={<Products />} />
        <Route path="/products/:productName/:productId" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
