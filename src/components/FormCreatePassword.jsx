import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
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

const FormCreatePassword = () => {
  const [password, setPassword] = useState(""); // State for the password input
  const [confirmPassword, setConfirmPassword] = useState(""); // State for the confirm password input
  const [newPassword, setNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false); // State for password error

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // Reset password error when typing
    setPasswordError(false);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    // Reset password error when typing
    setPasswordError(false);
  };

  const handleCancel = () => {
    // Reset nilai input ketika tombol Cancel ditekan
    setPassword("");
    setConfirmPassword("");
    // Reset password error
    setPasswordError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mengecek apakah password dan konfirmasi password sama
    if (password !== confirmPassword) {
      setPasswordError(true);
      return;
    }

    const passwordData = {
      password: password,
      confirmPassword: confirmPassword,
    };

    // Melakukan tindakan pada pengiriman formulir
    console.log("Password Data:", passwordData);

    // Mengatur password baru (contoh)
    setNewPassword(password);

    // Reset nilai input setelah pengiriman formulir
    setPassword("");
    setConfirmPassword("");
    // Reset password error
    setPasswordError(false);
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
          }}
        >
          Create Password
        </Typography>
        {passwordError && (
          <Alert severity="error" sx={{ marginBottom: "16px" }}>
            Password and Confirm Password must be the same.
          </Alert>
        )}
        <Box
          component="form"
          sx={{ width: "100%", marginTop: "20px", marginBottom: "40px" }}
        >
          <TextField
            fullWidth
            id="password"
            label="New Password"
            name="password"
            type="password"
            sx={{ marginBottom: "24px" }}
            value={password}
            onChange={handlePasswordChange}
          />
          <TextField
            fullWidth
            id="confirmPassword"
            label="Confirm New Password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
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
          <Link to="/login">
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
          <Link to="/login">
            <Button
              variant="contained"
              style={buttonStyle}
              color="orangeB"
              sx={{ boxShadow: "none" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Link>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default FormCreatePassword;
