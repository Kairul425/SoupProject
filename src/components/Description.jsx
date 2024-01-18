import { Container, Box, Typography, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
            {data[index]?.type_name}
          </Typography>
          <Typography
            sx={{
              color: "#333",
              fontSize: "24px",
              fontWeight: "600",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            {data[index]?.title}
          </Typography>
          <Typography
            sx={{
              color: "#5B4947",
              fontSize: "24px",
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
          <ButtonCombo
            first="Add to Cart"
            last="Buy Now"
            firstLink="#"
            lastLink="/checkout"
          />
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
          {data[index]?.description}
        </Typography>
      </Box>
    </Container>
  );
};

export default Description;
