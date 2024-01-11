import { Box } from "@mui/material";

import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Benefit from "../components/Benefit";
import Food from "../components/Food";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <Box sx={{ marginTop: "75px" }}>
      <Navbar />
      <Banner />
      <Product />
      <Benefit />
      <Food />
      <Footer />
    </Box>
  );
};

export default HomePage;
