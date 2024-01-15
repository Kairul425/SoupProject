import { Container } from "@mui/material";

import Navbar from "../components/Navbar";
import EmailConfirmationSuccess from "../components/EmailConfirmationSuccess";

const EmailConfirmation = () => {
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
        <EmailConfirmationSuccess />
      </Container>
    </>
  );
};

export default EmailConfirmation;
