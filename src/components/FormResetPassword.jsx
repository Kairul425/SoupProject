import { Box, Typography, TextField, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    brown: {
      main: "#5B4947",
    },
    orangeB: {
      main: "#EA9E1F",
    },
  },
});

const FormResetPassword = ({ onSubmit }) => {
  const [email, setEmail] = useState(""); // State for the email input
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (submitted) {
      // Jika formulir sudah disubmit, validasi saat pengguna mengubah nilai
      validateEmail(event.target.value);
    }
  };

  const validateEmail = (email) => {
    // Validasi email dan atur submitted menjadi true jika ada kesalahan
    if (!isValidEmail(email)) {
      setSubmitted(true);
    }
  };

  const handleCancel = () => {
    setEmail("");
    setSubmitted(false);
  };

  const handleConfirm = () => {
    validateEmail(email);

    if (!submitted && isValidEmail(email)) {
      const emailData = { email: email };
      console.log(emailData);
      onSubmit && onSubmit(email);
    }
  };

  const isValidEmail = (email) => {
    if (!email) {
      return false; // Default to false if the email is empty
    }

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
            fontWeight: "400",
            color: "#333333",
            marginBottom: "16px",
          }}
        >
          Reset Password
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            color: "#4F4F4F",
          }}
        >
          Send OTP code to your email address
        </Typography>
        <Box
          component="form"
          sx={{ width: "100%", marginTop: "60px", marginBottom: "40px" }}
        >
          <TextField
            fullWidth
            id="email"
            label="Email"
            name="email"
            type="email"
            sx={{ marginBottom: "24px" }}
            value={email}
            onChange={handleEmailChange}
            error={submitted && !isValidEmail(email)}
            helperText={
              submitted && !isValidEmail(email)
                ? "Please enter a valid email address"
                : ""
            }
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            gap: "24px",
          }}
        >
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              style={buttonStyle}
              color="brown"
              sx={{ boxShadow: "none" }}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Link>
          {isValidEmail(email) ? (
            <Link to="/emailConfirmation" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                style={buttonStyle}
                color="orangeB"
                sx={{ boxShadow: "none" }}
                onClick={handleConfirm}
              >
                Confirm
              </Button>
            </Link>
          ) : (
            <Button
              variant="contained"
              style={{ ...buttonStyle, cursor: "not-allowed" }}
              color="orangeB"
              disabled
            >
              Confirm
            </Button>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default FormResetPassword;
