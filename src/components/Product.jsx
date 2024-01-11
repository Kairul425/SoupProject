import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

import ice from "../assets/ice.png";
import biskuit from "../assets/biskuit.png";
import soto from "../assets/soto.png";
import bolu from "../assets/bolu.png";
import bubur from "../assets/bubur.png";
import spageti from "../assets/spageti.png";

class ProductData {
  constructor(id, image, name, description, price) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

const products = [
  new ProductData(1, ice, "Cold Drink", "Strawberry Float", "IDR 150.000"),
  new ProductData(2, biskuit, "Cookies", "Chocholate Cookies", "IDR 200.000"),
  new ProductData(3, soto, "Asian", "Tom Yum Thailand", "IDR 450.000"),
  new ProductData(4, bolu, "Dessert", "Green Tea Cheesecake", "IDR 400.000"),
  new ProductData(5, bubur, "Asian", "Soto Banjar Limau Kuit", "IDR 150.000"),
  new ProductData(
    6,
    spageti,
    "Western",
    "Italian Spaghetti Bolognese",
    "IDR 450.000"
  ),
];

const Product = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginBottom: "120px",
      }}
    >
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
        More professional class
      </Typography>
      <Box
        sx={{
          marginTop: "80px",
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: "center",
        }}
      >
        {products?.map((product) => (
          <Card
            key={product.id}
            sx={{ maxWidth: "350px", marginBottom: "40px" }}
          >
            <CardMedia
              component="img"
              alt={product.name}
              height="233.333px"
              image={product.image}
            />
            <CardContent>
              <Typography
                variant="body1"
                sx={{
                  color: "#828282",
                  fontSize: "16px",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "400",
                }}
              >
                {product.name}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "#5B4947",
                  fontSize: "20px",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "600",
                  marginBottom: "60px",
                }}
              >
                {product.description}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "#FABC1D",
                  fontSize: "20px",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "600",
                }}
              >
                {product.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Product;
