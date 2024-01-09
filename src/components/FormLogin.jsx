import "../pages/Login/index.css"

const FormLogin = () => {
  return (
    <div className="login-container">
      <div className="header">
        <h3>Welcome Back! Cheff</h3>
        <p>Please login first</p>
      </div>
      <form action="">
        <div className="email">
          <input type="email" placeholder="Email" />
        </div>
        <div className="password">
          <input type="password" placeholder="Password" />
        </div>
        <p>
            Forgot Password? <a href="#">Click Here</a>
        </p>
      </form>
      <div className="btn-login">
        <button>Login</button>
      </div>
      <p>
        Dont have account? <a href="FormLogin.jsx">Sign Up here</a>
      </p>
    </div>
  );
};

export default FormLogin;
