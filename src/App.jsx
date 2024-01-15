import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import CreatePassword from "./pages/CreatePassword";
import HomePage from "./pages/HomePage";
import ListMenuClass from "./pages/ListMenuClass";
import DetailClass from "./pages/DetailClass";
import Checkout from "./pages/Checkout";
import Invoice from "./pages/Invoice";
import DetailInvoice from "./pages/DetailInvoice";
import MyClass from "./pages/MyClass";
import EmailConfirmation from "./pages/EmailConfirmation";
import PurchaseConfirmation from "./pages/PurchaseConfirmation";

import { Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/createPassword"} element={<CreatePassword />} />
        <Route path={"/resetPassword"} element={<ResetPassword />} />
        <Route path={"/emailConfirmation"} element={<EmailConfirmation />} />
        <Route path={"/purchaseConfirmation"} element={<PurchaseConfirmation />} />
        <Route path={"/listMenuClass/:type_name"} element={<ListMenuClass />} />
        <Route path={"/detailClass/:title"} element={<DetailClass />} />
        <Route path={"/checkout"} element={<Checkout />} />
        <Route path={"/invoice"} element={<Invoice />} />
        <Route path={"/detailInvoice"} element={<DetailInvoice />} />
        <Route path={"/myClass"} element={<MyClass />} />
      </Route>
    </Routes>
  );
};

export default App;
