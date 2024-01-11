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

const FormCreatePassword = () => {
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
        <Box
          component="form"
          sx={{ width: "100%", marginTop: "60px", marginBottom: "40px" }}
        >
          <TextField
            fullWidth
            id="password"
            label="New Password"
            name="password"
            type="password"
            sx={{ marginBottom: "24px" }}
          />
          <TextField
            fullWidth
            id="new password"
            label="Confirm New Password"
            name="new password"
            type="password"
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
            Submit
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default FormCreatePassword;
