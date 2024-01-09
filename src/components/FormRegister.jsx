import "../pages/Register/index.css";

const FormRegister = () => {
  return (
    <div className="register">
      <div className="header">
        <h3>Are you ready become a professional cheff?</h3>
        <p>Please register first</p>
      </div>
      <form action="">
        <div className="name">
          <input type="text" placeholder="Name" />
        </div>
        <div className="email">
          <input type="email" placeholder="Email" />
        </div>
        <div className="password">
          <input type="password" placeholder="Password" />
        </div>
        <div className="confirm-password">
          <input type="password" placeholder="Confirm Password" />
        </div>
      </form>
      <div className="btn">
        <button>Sign Up</button>
      </div>
      <p>
        Have account? <a href="#">Login here</a>
      </p>
    </div>
  );
};

export default FormRegister;
