import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const theme = createTheme({
  palette: {
    orange: {
      main: "#FABC1D",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

const FormLogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = () => {
    console.log(loginData);

    // Add your login logic here
    // ...

    // Reset loginData
    setLoginData({
      email: "",
      password: "",
    });
  };

  const buttonStyle = {
    width: "140px",
    borderRadius: "8px",
    padding: "10px",
    color: "#5B4947",
    fontSize: "16px",
    textTransform: "none",
    fontFamily: "Montserrat",
    fontWeight: "500",
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "616px" }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: "24px",
            fontWeight: "500",
            color: "#5B4947",
            marginBottom: "16px",
          }}
        >
          Welcome Back!! Cheff
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            color: "#4F4F4F",
          }}
        >
          Please login first
        </Typography>
        <Box component="form" sx={{ width: "100%", marginY: "40px" }}>
          <TextField
            fullWidth
            id="email"
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            sx={{ marginBottom: "24px" }}
            value={loginData.email}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            value={loginData.password}
            onChange={handleInputChange}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "60px",
          }}
        >
          <Button
            variant="contained"
            style={buttonStyle}
            color="orange"
            sx={{ boxShadow: "none" }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            color: "#000",
            textAlign: "center",
          }}
        >
          Don't have an account?
          <Link href="register" underline="none">
            {" Sign Up here"}
          </Link>
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default FormLogin;
