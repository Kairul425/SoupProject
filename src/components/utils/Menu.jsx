import { Box, Typography, Button } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

const Menu = () => {
  const buttonStyle = {
    color: "#5B4947",
    fontWeight: "500",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "16px",
    textTransform: "none",
  };

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        width: "441px",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <Button variant="text" sx={{ color: "#5B4947", padding: "10px" }}>
        <ShoppingCartIcon fontSize="medium" />
      </Button>

      <Button variant="text" style={buttonStyle}>
        My Class
      </Button>

      <Button variant="text" style={buttonStyle}>
        Invoice
      </Button>

      <Typography variant="h6">|</Typography>
      <Box sx={{ display: "flex" }}>
        <Button variant="text" sx={{ color: "#FABC1D", padding: "5px" }}>
          <PersonIcon fontSize="large" />
        </Button>

        <Button variant="text" sx={{ color: "#5B4947", padding: "5px" }}>
          <LogoutIcon fontSize="medium" />
        </Button>
      </Box>
    </Box>
  );
};

export default Menu;
