import { Box, Container, Typography } from "@mui/material";

import listmenubaner from "../assets/listmenubaner.png";

const BannerListMenu = () => {
  return (
    <Box sx={{ borderBottom: "1px solid #E0E0E0", marginBottom: "80px" }}>
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
          Asian
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Container>
    </Box>
  );
};

export default BannerListMenu;
