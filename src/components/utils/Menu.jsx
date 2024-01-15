import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

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
      <Link to={`/checkout`} style={{ textDecoration: "none" }}>
        <Button variant="text" sx={{ color: "#5B4947", padding: "10px" }}>
          <ShoppingCartIcon fontSize="medium" />
        </Button>
      </Link>

      <Link to={`/myClass`} style={{ textDecoration: "none" }}>
        <Button variant="text" style={buttonStyle}>
          My Class
        </Button>
      </Link>

      <Link to={`/invoice`} style={{ textDecoration: "none" }}>
        <Button variant="text" style={buttonStyle}>
          Invoice
        </Button>
      </Link>

      <Typography variant="h6" color={"black"}>
        |
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link to={`/resetPassword`} style={{ textDecoration: "none" }}>
          <Button variant="text" sx={{ color: "#FABC1D", padding: "5px" }}>
            <PersonIcon fontSize="large" />
          </Button>
        </Link>
        <Link to={`/login`} style={{ textDecoration: "none" }}>
          <Button variant="text" sx={{ color: "#5B4947", padding: "5px" }}>
            <LogoutIcon fontSize="medium" />
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Menu;