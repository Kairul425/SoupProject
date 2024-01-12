import { AppBar, Box, Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    orange: {
      main: "#FABC1D",
    },
  },
});

const CheckoutBar = () => {
  const buttonStyle = {
    width: "175px",
    borderRadius: "8px",
    padding: "5px 20px",
    color: "#5B4947",
    fontSize: "16px",
    textTransform: "none",
    fontFamily: "Montserrat",
    fontWeight: "500",
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar sx={{ position: "fixed", top: "auto", bottom: 0 }}>
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
            <Box sx={{ display: "flex", gap: "24px", alignItems: "center" }}>
              <Typography
                variant="body2"
                sx={{
                  color: "#333333",
                  fontSize: "18px",
                  fontWeight: "400",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Total Price
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "#FABC1D",
                  fontSize: "24px",
                  fontWeight: "600",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                IDR 11.500.000
              </Typography>
            </Box>
            <Button
              variant="contained"
              style={buttonStyle}
              color="orange"
              sx={{ boxShadow: "none" }}
            >
              Pay Now
            </Button>
          </Box>
        </Box>
      </AppBar>
    </ThemeProvider>
  );
};

export default CheckoutBar;
