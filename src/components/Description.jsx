import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

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

const theme = createTheme({
  palette: {
    brown: {
      main: "#5B4947",
    },
    orange: {
      main: "#FABC1D",
    },
  },
});

const Description = () => {
  const { type_name, index } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://52.237.194.35:2024/api/Menu/GetMenuLimit`)
      .then((res) => setData(res.data));
  }, [type_name]);

  const formatPrice = (price) => {
    const NumberPrice = Number(price);
    return NumberPrice.toLocaleString("id-ID");
  };

  const buttonStyle = {
    color: "#5B4947",
    fontSize: "16px",
    textTransform: "none",
    fontFamily: "Montserrat",
    fontWeight: "500",
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="lg"
        sx={{
          paddingTop: { xs: "30px", md: "40px" },
          paddingBottom: { xs: "67px", md: "80px" },
          borderBottom: "1px solid #E0E0E0",
          marginBottom: { xs: "70px", md: "80px" },
        }}
      >
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            paddingX: { xs: "0", sm: "24px", md: "27px" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "400px" },
              height: { xs: "230px", sm: "267px" },
            }}
          >
            <img src={soto} alt="soto" width={"100%"} height={"100%"} />
          </Box>
          <Box
            sx={{
              marginLeft: { xs: "0", sm: "40px" },
              marginTop: { xs: "20px", sm: "0" },
            }}
          >
            <Typography
              sx={{
                color: "#828282",
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: "400",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {data[index]?.type_name}
            </Typography>
            <Typography
              sx={{
                color: "#333",
                fontSize: { xs: "19px", sm: "24px" },
                fontWeight: "600",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {data[index]?.title}
            </Typography>
            <Typography
              sx={{
                color: "#5B4947",
                fontSize: { xs: "19px", sm: "24px" },
                fontWeight: "600",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              IDR {formatPrice(data[index]?.price)}
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
                marginTop: { xs: "23px", sm: "30px" },
                width: "300px",
                marginBottom: { xs: "30px", sm: "60px" },
              }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Box sx={{ display: { xs: "block", sm: "flex" }, gap: "16px" }}>
              <Button
                variant="outlined"
                size="medium"
                style={buttonStyle}
                sx={{
                  width: { xs: "100%", sm: "233px" },
                  marginBottom: { xs: "10px", sm: "0" },
                }}
                color="brown"
              >
                Add to Card
              </Button>
              <Link to="/checkout">
                <Button
                  variant="contained"
                  size="medium"
                  style={buttonStyle}
                  sx={{ width: { xs: "100%", sm: "233px" } }}
                  color="orange"
                >
                  Buy Now
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            paddingX: { xs: "0", sm: "27px" },
            marginTop: { xs: "30px", sm: "40px" },
          }}
        >
          <Typography
            sx={{
              color: "#333",
              fontSize: { xs: "19px", sm: "24px" },
              fontWeight: "600",
              fontFamily: "Montserrat, sans-serif",
              marginBottom: { xs: "12px", sm: "16px" },
            }}
          >
            Description
          </Typography>
          <Typography
            sx={{
              color: "#333",
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: "400",
              fontFamily: "Montserrat, sans-serif",
              marginBottom: { xs: "16px", sm: "24px" },
            }}
          >
            {data[index]?.description}
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Description;
