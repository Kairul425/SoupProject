import { Container } from "@mui/material";

import Navbar from "../components/Navbar";
import PurchaseConfirmationSuccess from "../components/PurchaseConfirmationSuccess";

const PurchaseConfirmation = () => {
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
        <PurchaseConfirmationSuccess />
      </Container>
    </>
  );
};

export default PurchaseConfirmation;
