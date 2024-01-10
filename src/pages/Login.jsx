import { Container } from "@mui/material";

import Navbar from "../components/Navbar";
import FormLogin from "../components/FormLogin";

const Login = () => {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="xl"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormLogin />
      </Container>
    </>
  );
};

export default Login;
