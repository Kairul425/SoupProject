import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import CreatePassword from "./pages/CreatePassword";
import HomePage from "./pages/HomePage";
import ListMenuClass from "./pages/ListMenuClass";
import DetailClass from "./pages/DetailClass";
import Checkout from "./pages/Checkout";
import { Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/createPassword"} element={<CreatePassword />} />
          <Route path={"/resetPassword"} element={<ResetPassword />} />
          <Route
            path={"/listMenuClass/:type_name"}
            element={<ListMenuClass />}
          />
          <Route path={"/detailClass/:title"} element={<DetailClass />} />
          <Route path={"/checkout"} element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
