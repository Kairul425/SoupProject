import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

import orange from "../assets/orange.png";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Food = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios
      .get("http://52.237.194.35:2024/api/Type/GetActiveType")
      .then((res) => setFoods(res.data));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ marginBottom: "147px" }}>
      <Typography
        variant="h1"
        sx={{
          color: "#5B4947",
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "600",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        More food type as you can choose
      </Typography>
      <Box
        sx={{
          width: "100%",
          marginTop: "80px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "880px",
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          {foods?.map((food) => (
            <Link
              key={food.id_type}
              to={`/ListMenuClass/${food.type_name}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                key={food.id_type}
                sx={{
                  maxWidth: "200px",
                  marginBottom: "27px",
                  boxShadow: "none",
                }}
              >
                <CardMedia
                  component="img"
                  image={orange}
                  alt={food.type_name}
                />
                <CardContent>
                  <Typography
                    sx={{
                      color: "#000",
                      textAlign: "center",
                      fontSize: "24px",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    {food.type_name}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Food;
