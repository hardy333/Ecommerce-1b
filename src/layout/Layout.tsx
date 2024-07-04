import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
// import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* {children} */}
      {/* <ScrollRestoration /> */}
      <Footer />
    </>
  );
};

export default Layout;
