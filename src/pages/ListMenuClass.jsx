import { Box } from "@mui/material";
import { useEffect } from "react";

import Navbar from "../components/Navbar";
import BannerListMenu from "../components/BannerListMenu";
import Footer from "../components/Footer";
import Product from "../components/Product";

const ListMenuClass = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ marginTop: "75px" }}>
      <Navbar />
      <BannerListMenu />
      <Product title="Another menu in this class" />
      <Footer />
    </Box>
  );
};

export default ListMenuClass;
