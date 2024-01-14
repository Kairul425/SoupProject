import { Box, Container, Typography } from "@mui/material";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TableDetail from "../components/TableDetail";

const DetailInvoice = () => {
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
          variant="h3"
          sx={{
            color: "#4F4F4F",
            fontSize: "20px",
            fontWeight: "600",
            fontFamily: "Montserrat",
            marginTop: "32px",
          }}
        >
          Details Invoice
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
            alignItems: "end",
            marginBottom: "34px",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#4F4F4F",
                fonySize: "18px",
                fontFamily: "Montserrat",
                fontWeight: "500",
              }}
            >
              No. Invoice : SOU00003
            </Typography>
            <Typography
              sx={{
                color: "#4F4F4F",
                fonySize: "18px",
                fontFamily: "Montserrat",
                fontWeight: "500",
              }}
            >
              Date : 12 June 2022
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#4F4F4F",
              fonySize: "18px",
              fontFamily: "Montserrat",
              fontWeight: "700",
            }}
          >
            Total Price IDR 450.000
          </Typography>
        </Box>
        <TableDetail />
      </Container>
      <Footer />
    </>
  );
};

export default DetailInvoice;
