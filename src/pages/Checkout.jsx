import { Box } from "@mui/material";
import React, { useEffect } from 'react';

import Navbar from "../components/Navbar";
import CheckoutBar from "../components/CheckoutBar";
import CheckoutList from "../components/CheckoutList";

const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ marginTop: "75px" }}>
      <CheckoutList />
      <CheckoutBar />
    </Box>
  );
};

export default Checkout;
