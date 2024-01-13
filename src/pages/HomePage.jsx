import { Box } from "@mui/material";
import { useEffect } from "react";

import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Benefit from "../components/Benefit";
import Food from "../components/Food";
import Footer from "../components/Footer";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ marginTop: "75px" }}>
      <Navbar />
      <Banner />
      <Product title="More professional class" />
      <Benefit />
      <Food />
      <Footer />
    </Box>
  );
};

export default HomePage;
