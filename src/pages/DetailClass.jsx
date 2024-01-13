import { Box } from "@mui/material";
import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import Description from "../components/Description";
import Footer from "../components/Footer";
import Product from "../components/Product";

const DetailClass = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ marginTop: "75px" }}>
      <Navbar />
      <Description />
      <Product title="Another menu in this class" />
      <Footer />
    </Box>
  );
};

export default DetailClass;
