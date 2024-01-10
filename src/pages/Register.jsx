import { Container } from "@mui/material";

import Navbar from "../components/Navbar";
import FormRegister from "../components/FormRegister";

const Register = () => {
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
        <FormRegister />
      </Container>
    </>
  );
};

export default Register;
