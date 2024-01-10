import { AppBar, Box, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Logo from "../assets/logo.png";

const theme = createTheme({
  palette: {
    brown: {
      main: "#5B4947",
    },
    orange: {
      main: "#FABC1D",
    },
  },
});

const Navbar = () => {
  const buttonStyle = {
    width: "175px",
    borderRadius: "8px",
    padding: "10px 20px",
    color: "#5B4947",
    fontSize: "16px",
    textTransform: "none",
    fontFamily: "Montserrat",
    fontWeight: "500",
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" color="transparent" sx={{ boxShadow: "none" }}>
        <Box
          sx={{
            paddingX: "50px",
            paddingY: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <img src={Logo} alt="logo" width="50px" />
            </Box>
            <Box sx={{ display: "flex", gap: "40px" }}>
              <Button variant="outlined" style={buttonStyle} color="brown">
                Login
              </Button>
              <Button
                variant="contained"
                style={buttonStyle}
                color="orange"
                sx={{ boxShadow: "none" }}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Box>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
