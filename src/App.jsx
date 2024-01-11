import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import CreatePassword from "./pages/CreatePassword";
import HomePage from "./pages/HomePage";

import "./App.css";

const App = () => {
  return (
    <>
      <Login />
      <Register />
      <CreatePassword />
      <ResetPassword />
      {/* <HomePage /> */}
    </>
  );
};

export default App;
