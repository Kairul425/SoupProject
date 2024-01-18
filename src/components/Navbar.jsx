import { AppBar, Box } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "./utils/Menu";
import ButtonCombo from "./utils/ButtonCombo";

import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: "none", backgroundColor: "white" }}
    >
      <Box
        sx={{
          paddingX: { xs: "20px", md: "50px" },
          height: { xs: "60px", md: "75px" },
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <Box>
              <img src={Logo} alt="logo" width="50px" />
            </Box>
          </Link>
          {isLogin ? (
            <Menu />
          ) : (
            <ButtonCombo
              first="Login"
              last="Register"
              firstLink="/login"
              lastLink="/register"
              setIsLogin={setIsLogin}
            />
          )}
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;
