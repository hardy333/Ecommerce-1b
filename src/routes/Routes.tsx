import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
// import Product from "../pages/Product";
import Checkout from "../pages/checkout/Checkout";
import Notfound from "../pages/404";
import Layout from "../layout/Layout";
import ProductWithRedux from "../pages/ProductWithRedux";
import Practise from "../pages/practise/Practise";
// import Product from "../pages/Product";
// import Layout from "../layout/Layout";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:productName" element={<Products />} />
        <Route
          path="/products/:productName/:productId"
          element={<ProductWithRedux />}
        />

        <Route path="*" element={<Notfound />} />
        <Route path="/practise" element={<Practise />} />
        {/* <Route path="/products/:productName/:productId" element={<Product />} /> */}
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
