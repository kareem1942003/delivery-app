import Carts from "../../components/UI/cart/Carts";

import Footer from "../Footer/Footer";
import Header from "../Headre/Header";
import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const Layout = () => {
  // @ts-ignore
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  return (
    <>
      <Header />
      {showCart && <Carts />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
