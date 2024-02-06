import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
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
    let apiUrl = import.meta.env.VITE_REACT_APP_API_URL + "/Menu/GetMenuLimit";

    if (location.pathname.includes("/ListMenuClass")) {
      apiUrl = `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/Menu/GetMenuByTypeName?type_name=${type_name}`;
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
        marginBottom: { xs: "80px", md: "120px" },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "#5B4947",
          textAlign: "center",
          fontSize: { xs: "26px", sm: "29px", md: "32px" },
          fontWeight: "600",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        {props.title}
      </Typography>
      <Box
        sx={{
          marginTop: { xs: "60px", md: "80px" },
          paddingX: { xs: 0, sm: "19px", md: "27px" },
        }}
      >
        <Grid container spacing={{ xs: 1, sm: 2 }}>
          {data?.map((product, index) => (
            <Grid key={product.id_menu} item xs={6} sm={4} md={4}>
              <Link
                key={product.id_menu}
                to={`/DetailClass/${product.title}/${index}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  key={product.id_menu}
                  sx={{
                    marginBottom: { xs: "20px", md: "40px" },
                    height: { xs: "290px", md: "400px" },
                    position: "relative",
                    "&:hover": {
                      transform: "scale(1.03)",
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={product.type_name}
                    image={soto}
                    sx={{ height: { xs: "160px", md: "233.333px" } }}
                  />
                  <CardContent>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#828282",
                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
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
                        fontSize: { xs: "14px", sm: "18px", md: "20px" },
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: "600",
                      }}
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        color: "#FABC1D",
                        fontSize: { xs: "16px", md: "20px" },
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: "600",
                        position: "absolute",
                        bottom: { xs: "14px", sm: "24px", md: "30px" },
                      }}
                    >
                      IDR {formatPrice(product.price)}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Product;
