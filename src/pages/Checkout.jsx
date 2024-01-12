import { Box } from "@mui/material";

import Navbar from "../components/Navbar";
import CheckoutBar from "../components/CheckoutBar";
import CheckoutList from "../components/CheckoutList";

const Checkout = () => {
  return (
    <Box sx={{ marginTop: "75px" }}>
      <Navbar />
      <CheckoutList />
      <CheckoutBar />
    </Box>
  );
};

export default Checkout;
