import { Box, Typography, TextField, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    brown: {
      main: "#5B4947",
    },
    orangeB: {
      main: "#EA9E1F",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

const FormResetPassword = () => {
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
          <Button
            variant="outlined"
            style={buttonStyle}
            color="brown"
            sx={{ boxShadow: "none" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            style={buttonStyle}
            color="orangeB"
            sx={{ boxShadow: "none" }}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default FormResetPassword;
