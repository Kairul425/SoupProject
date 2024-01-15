import { Box, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from 'react-router-dom';

import ConfirmationImage from '../assets/confirmation.png';
import ButtonCombo from "../components/utils/ButtonCombo";
import { ArrowForward, Home } from '@mui/icons-material';

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

const PurchaseConfirmationSuccess = () => {

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          maxWidth: "616px",
          margin: "auto",
          textAlign: "center",
          marginTop: "20vh",
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
          Purchase Successfully
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            color: "#4F4F4F",
            marginBottom:"40px"
          }}
        >
          Horay!! Let's cook and become a professional cheff
        </Typography>
        <Box sx={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <ButtonCombo
                first="Back to Home"
                last="Open Invoice"
                firstLink="/"
                lastLink="/invoice"
            />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PurchaseConfirmationSuccess;
