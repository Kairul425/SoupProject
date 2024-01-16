import { Box } from "@mui/material";
import { useEffect } from "react";

import Banner from "../components/Banner";
import Product from "../components/Product";
import Benefit from "../components/Benefit";
import Food from "../components/Food";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ marginTop: "75px" }}>
      <Banner />
      <Product title="More professional class" />
      <Benefit />
      <Food />
    </Box>
  );
};

export default HomePage;
