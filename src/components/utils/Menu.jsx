import { useState } from "react";
import { Box, Typography, Button, Drawer, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";

const Menu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const buttonStyle = {
    color: "#5B4947",
    fontWeight: "500",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "16px",
    textTransform: "none",
  };

  return (
    <Box>
      {/* Desktop Menu */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
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

      {/* Hamburger Menu Button */}
      <IconButton
        onClick={() => setDrawerOpen(true)}
        sx={{ display: { xs: "flex", sm: "none" }, alignItems: "center" }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box
          sx={{
            width: "80vw",
            maxWidth: "300px",
            paddingTop: "16px",
            paddingLeft: "16px",
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
      </Drawer>
    </Box>
  );
};

export default Menu;
