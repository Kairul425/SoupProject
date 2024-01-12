import { Box, Typography, TextField, Button, Link, Alert } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";

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

const FormRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    // Reset password error when typing
    setPasswordError("");
  };

  const handleSignUp = () => {
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Password and Confirm Password must be the same");
      return;
    }

    // Add your sign-up logic here
    // ...

    // Reset formData after sign-up (optional)
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
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
          Are you ready become a professional chef?
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            color: "#4F4F4F",
          }}
        >
          Please register first
        </Typography>
        <Box component="form" sx={{ width: "100%", marginY: "40px" }}>
          <TextField
            fullWidth
            id="name"
            label="Name"
            name="name"
            type="text"
            autoComplete="name"
            sx={{ marginBottom: "24px" }}
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            id="email"
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            sx={{ marginBottom: "24px" }}
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            sx={{ marginBottom: "24px" }}
            value={formData.password}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            id="confirmPassword"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          {passwordError && (
            <Alert severity="error" sx={{ marginBottom: "16px" }}>
              {passwordError}
            </Alert>
          )}
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
            onClick={handleSignUp}
          >
            Sign Up
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
          Have an account?
          <Link href="login" underline="none">
            {" Login here"}
          </Link>
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default FormRegister;
