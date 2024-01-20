import { Box } from "@mui/material";
import { useEffect } from "react";

import BannerListMenu from "../components/BannerListMenu";
import Product from "../components/Product";

const ListMenuClass = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ marginTop: { xs: "60px", md: "75px" } }}>
      <BannerListMenu />
      <Product title="Another menu in this class" />
    </Box>
  );
};

export default ListMenuClass;
