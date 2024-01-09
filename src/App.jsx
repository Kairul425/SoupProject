import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="App">
      <div className="navbar">
        <div className="img-navbar">
          <h1>navbar tes</h1>
        </div>
        <div className="btn-navbar">
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
      <Login />
      <Register />
    </div>
  );
};

export default App;
