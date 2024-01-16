import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useLocation } from "react-router-dom";

import soto from "../assets/soto.png";

const Product = (props) => {
  const location = useLocation();
  const { type_name } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    let apiUrl = "http://52.237.194.35:2024/api/Menu/GetMenuLimit";

    if (location.pathname.includes("/ListMenuClass")) {
      apiUrl = `http://52.237.194.35:2024/api/Menu/GetMenuByTypeName?type_name=${type_name}`;
    }

    axios.get(apiUrl).then((res) => setData(res.data));
  }, [location, type_name]);

  const formatPrice = (price) => {
    return price.toLocaleString("id-ID");
  };

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
        {props.title}
      </Typography>
      <Box
        sx={{
          marginTop: "80px",
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          paddingX: "27px",
        }}
      >
        {data?.map((product, index) => (
          <Link
            key={product.id_menu}
            to={`/DetailClass/${product.title}/${index}`}
            style={{ textDecoration: "none" }}
          >
            <Card
              key={product.id_menu}
              sx={{ maxWidth: "350px", marginBottom: "40px" }}
            >
              <CardMedia
                component="img"
                alt={product.type_name}
                height="233.333px"
                image={soto}
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
                  {product.type_name}
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
                  {product.title}
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
                  IDR {formatPrice(product.price)}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Box>
    </Container>
  );
};

export default Product;
