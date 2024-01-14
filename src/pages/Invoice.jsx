import { Container, Typography } from "@mui/material";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TableInvoice from "../components/TableInvoice";

const Invoice = () => {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          marginTop: "90px",
          marginBottom: "200px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#5B4947",
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Invoice
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "#4F4F4F",
            fontSize: "20px",
            fontWeight: "600",
            fontFamily: "Montserrat",
            marginTop: "32px",
            marginBottom: "24px",
          }}
        >
          Menu Invoice
        </Typography>
        <TableInvoice />
      </Container>
      <Footer />
    </>
  );
};
export default Invoice;
