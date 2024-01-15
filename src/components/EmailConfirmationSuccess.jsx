import { Box, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from 'react-router-dom';

import ConfirmationImage from '../assets/confirmation.png';

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

const EmailConfirmationSuccess = () => {
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
      <Box
        sx={{
          maxWidth: "616px",
          margin: "auto",
          textAlign: "center",
          marginTop: "20vh", // Adjust as needed for vertical spacing
        }}
      >
        <img
          src={ConfirmationImage}
          alt="Email Confirmation"
          style={{ width: "330px", height: "auto", marginBottom: "16px" }}
        />
        <Typography
          variant="h3"
          sx={{
            fontSize: "24px",
            fontWeight: "500",
            color: "#5B4947",
            marginBottom: "16px",
          }}
        >
          Email Confirmation Success
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            color: "#4F4F4F",
          }}
        >
          Congratulations! Your email has already been used.
        </Typography>
        <Link to="/login">
          <Button
            variant="contained"
            style={buttonStyle}
            color="orange"
            sx={{ boxShadow: 'none', marginTop: '16px' }}
          >
            Login Here
          </Button>
        </Link>
      </Box>
    </ThemeProvider>
  );
};

export default EmailConfirmationSuccess;
