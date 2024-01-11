import { Box, Container, Typography } from "@mui/material";

import banner from "../assets/banner.png";

const Kotak = (props) => {
  return (
    <Box
      sx={{
        width: "324px",
        height: "207px",
        textAlign: "center",
        padding: "10px",
        border: "1px solid #BDBDBD",
        borderRadius: "20px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "#FABC1D",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "48px",
          fontWeight: "600",
          marginBottom: "31px",
        }}
      >
        {props.num}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#5B4947",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "16px",
          fontWeight: "500px",
        }}
      >
        {props.text}
      </Typography>
    </Box>
  );
};

const Banner = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "274px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "60px",
        }}
      >
        <Box sx={{ textAlign: "center", width: "843px" }}>
          <Typography
            variant="h4"
            sx={{
              color: "#fff",

              fontFamily: "Montserrat, sans-serif",
              fontWeight: "600",
              fontSize: "32px",
              marginBottom: "27px",
            }}
          >
            Be the next great chef
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#fff",

              fontFamily: "Montserrat, sans-serif",
              fontWeight: "400",
              fontSize: "24px",
            }}
          >
            We are able to awaken your cooking skills to become a classy chef
            and ready to dive into the professional world
          </Typography>
        </Box>
      </Box>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          // backgroundColor: "red",
          marginBottom: "56px",
        }}
      >
        <Box sx={{ width: "1052px", display: "flex", gap: "40px" }}>
          <Kotak
            num="200+"
            text="Various cuisines available in professional class"
          />
          <Kotak
            num="50+"
            text="A chef who is reliable and has his own characteristics in cooking"
          />
          <Kotak
            num="30+"
            text="Cooperate with trusted and upscale restaurants"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
