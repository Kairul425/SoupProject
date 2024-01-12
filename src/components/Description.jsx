import { Container, Box, Typography, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import ButtonCombo from "./utils/ButtonCombo";

import soto from "../assets/soto.png";

const currencies = [
  {
    value: "USD",
    label: "Select Schedule2",
  },
  {
    value: "EUR",
    label: "Select Schedule",
  },
  {
    value: "BTC",
    label: "Select Schedule3",
  },
  {
    value: "JPY",
    label: "Select Schedule4",
  },
];

const Description = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingTop: "40px",
        paddingBottom: "80px",
        borderBottom: "1px solid #E0E0E0",
        marginBottom: "80px",
      }}
    >
      <Box sx={{ display: "flex", paddingX: "27px" }}>
        <img src={soto} alt="soto" width={"400px"} height={"267px"} />
        <Box sx={{ marginLeft: "40px" }}>
          <Typography
            sx={{
              color: "#828282",
              fontSize: "16px",
              fontWeight: "400",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Asian
          </Typography>
          <Typography
            sx={{
              color: "#333",
              fontSize: "24px",
              fontWeight: "600",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Tom Yum Thailand
          </Typography>
          <Typography
            sx={{
              color: "#5B4947",
              fontSize: "24px",
              fontWeight: "600",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            IDR 450.000
          </Typography>
          <TextField
            id="outlined-select-currency"
            select
            defaultValue="EUR"
            size="small"
            InputProps={{
              style: {
                color: "#41454D",
                fontSize: "15px",
                fontWeight: "400",
                fontFamily: "Montserrat, sans-serif",
              },
            }}
            sx={{
              marginTop: "30px",
              width: "300px",
              marginBottom: "60px",
            }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <ButtonCombo first="Add to Cart" last="Buy Now" />
        </Box>
      </Box>
      <Box sx={{ paddingX: "27px", marginTop: "40px" }}>
        <Typography
          sx={{
            color: "#333",
            fontSize: "24px",
            fontWeight: "600",
            fontFamily: "Montserrat, sans-serif",
            marginBottom: "16px",
          }}
        >
          Description
        </Typography>
        <Typography
          sx={{
            color: "#333",
            fontSize: "16px",
            fontWeight: "400",
            fontFamily: "Montserrat, sans-serif",
            marginBottom: "24px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography
          sx={{
            color: "#333",
            fontSize: "16px",
            fontWeight: "400",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
    </Container>
  );
};

export default Description;
