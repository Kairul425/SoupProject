import { AppBar, Box } from "@mui/material";
import { useState } from "react";
import { Link } from 'react-router-dom';

import Menu from "./utils/Menu";
import ButtonCombo from "./utils/ButtonCombo";

import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AppBar position="fixed" sx={{ boxShadow: "none" }}>
      <Box
        sx={{
          paddingX: "50px",
          height: "75px",
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
