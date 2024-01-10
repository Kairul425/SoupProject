import { Container } from "@mui/material";

import Navbar from "../components/Navbar";
import FormResetPassword from "../components/FormResetPassword";

const ResetPassword = () => {
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
        <FormResetPassword />
      </Container>
    </>
  );
};

export default ResetPassword;
