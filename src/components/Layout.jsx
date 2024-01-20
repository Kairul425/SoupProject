import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  const dataNoNavbar = ["/emailConfirmation", "/purchaseConfirmation"];
  const dataNoFooter = [
    "/ResetPassword",
    "/register",
    "/purchaseConfirmation",
    "/createPassword",
    "/resetPassword",
    "/login",
    "/emailConfirmation",
    "/checkout",
  ];
  const { pathname } = useLocation();
  const condtionNavbar = !dataNoNavbar.find((path) => path === pathname);
  const condtionFooter = !dataNoFooter.find((path) => path === pathname);

  return (
    <>
      {condtionNavbar && <Navbar />}

      <Outlet />

      {condtionFooter && <Footer />}
    </>
  );
};

export default Layout;
