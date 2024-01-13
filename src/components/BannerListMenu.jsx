import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import listmenubaner from "../assets/listmenubaner.png";

const BannerListMenu = () => {
  const { type_name } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://52.237.194.35:2024/api/Type/GetTypeByName?name=${type_name}`)
      .then((res) => {
        setProductData(res.data);
      });
  }, [type_name]);

  return (
    <Box
      key={productData?.id_type}
      sx={{ borderBottom: "1px solid #E0E0E0", marginBottom: "80px" }}
    >
      <Box
        sx={{
          backgroundImage: `url(${listmenubaner})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "294px",
          marginBottom: "46px",
        }}
      ></Box>
      <Container maxWidth="xl" sx={{ marginBottom: "80px" }}>
        <Typography
          variant="h3"
          sx={{
            color: "#000",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "600",
            fontSize: "24px",
          }}
        >
          {productData?.type_name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#333",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "400",
            fontSize: "16px",
            marginTop: "16px",
          }}
        >
          {productData?.description}
        </Typography>
      </Container>
    </Box>
  );
};

export default BannerListMenu;
