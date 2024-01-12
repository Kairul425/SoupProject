import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

import rendang from "../assets/rendang.png";
import orange from "../assets/orange.png";
import rice from "../assets/rice.png";
import pizza from "../assets/pizza.png";
import kopi from "../assets/kopi.png";
import coco from "../assets/coco.png";
import desert from "../assets/desert.png";
import steak from "../assets/steak.png";

class FoodData {
  constructor(id, image, name) {
    this.id = id;
    this.image = image;
    this.name = name;
  }
}

const foods = [
  new FoodData(1, rendang, "Asian"),
  new FoodData(2, orange, "Cold Drink"),
  new FoodData(3, coco, "Cookies"),
  new FoodData(4, desert, "Desert"),
  new FoodData(5, rice, "Eastern"),
  new FoodData(6, kopi, "Hot Drink"),
  new FoodData(7, pizza, "Junkfood"),
  new FoodData(8, steak, "Western"),
];

const Food = () => {
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
            <Link key={food.id} to={`/ListMenuClass`} style={{ textDecoration: 'none' }}>
              <Card
                key={food.id}
                sx={{ maxWidth: "200px", marginBottom: "27px" }}
              >
                <CardMedia component="img" image={food.image} alt={food.name} />
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
                    {food.name}
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
