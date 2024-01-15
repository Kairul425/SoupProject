import { Container } from "@mui/material";

import PurchaseConfirmationSuccess from "../components/PurchaseConfirmationSuccess";

const PurchaseConfirmation = () => {
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
        <PurchaseConfirmationSuccess />
      </Container>
    </>
  );
};

export default PurchaseConfirmation;
