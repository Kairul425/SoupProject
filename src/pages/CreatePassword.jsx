import { Container } from "@mui/material";

import Navbar from "../components/Navbar";
import FormCreatePassword from "../components/FormCreatePassword";

const CreatePassword = () => {
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
        <FormCreatePassword />
      </Container>
    </>
  );
};

export default CreatePassword;
