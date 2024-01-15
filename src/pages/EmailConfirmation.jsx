import { Container } from "@mui/material";

import EmailConfirmationSuccess from "../components/EmailConfirmationSuccess";

const EmailConfirmation = () => {
  return (
    <>
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
