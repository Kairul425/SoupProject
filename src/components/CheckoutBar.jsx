import { useState } from "react";
import { AppBar, Box, Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import PaymentMethod from "./PaymentMethod";

const theme = createTheme({
  palette: {
    orange: {
      main: "#FABC1D",
    },
  },
});

const CheckoutBar = () => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const buttonStyle = {
    borderRadius: "8px",
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
            paddingX: { xs: "10px", sm: "50px" },
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
            <Box
              sx={{
                display: "flex",
                gap: { xs: "15px", sm: "24px" },
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#333333",
                  fontSize: { xs: "14px", sm: "18px" },
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
                  fontSize: { xs: "19px", sm: "24px" },
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
              size="medium"
              color="orange"
              sx={{ boxShadow: "none", width: { xs: "120px", sm: "175px" } }}
              onClick={handleClickOpen}
            >
              Pay Now
            </Button>
          </Box>
        </Box>
      </AppBar>
      <PaymentMethod
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </ThemeProvider>
  );
};

export default CheckoutBar;
