import { Box } from "@mui/material";
import React, { useEffect } from "react";

import Description from "../components/Description";
import Product from "../components/Product";

const DetailClass = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ marginTop: "75px" }}>
      <Description />
      <Product title="Another menu in this class" />
    </Box>
  );
};

export default DetailClass;
