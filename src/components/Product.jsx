import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const Product = (props) => {
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
        {props.data?.map((product) => (
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
