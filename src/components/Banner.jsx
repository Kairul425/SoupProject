import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import banner from "../assets/banner.png";

const Kotak = (props) => {
  return (
    <Box
      sx={{
        width: { xs: "324px", sm: "250px", md: "324px" },
        height: { xs: "207px", sm: "190px", md: "207px" },
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
          fontSize: { xs: "48px", sm: "40px", md: "48px" },
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
          fontSize: { xs: "16px", sm: "14px", md: "16px" },
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
          height: { xs: "200px", md: "274px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: { xs: "48px", md: "60px" },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            width: "843px",
            paddingX: { xs: "7px", sm: "9px" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "600",
              fontSize: { xs: "24px", sm: "27", md: "32px" },
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
              fontSize: { xs: "16px", sm: "19px", md: "24px" },
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
          marginBottom: "56px",
        }}
      >
        <Box
          sx={{
            width: "1052px",
            display: { xs: "none", sm: "flex" },
            gap: { sm: "20px", md: "40px" },
          }}
        >
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
        <Box sx={{ display: { xs: "block", sm: "none" }, width: "100%" }}>
          <Swiper className="mySwiper">
            <SwiperSlide
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Kotak
                num="200+"
                text="Various cuisines available in professional class"
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Kotak
                num="50+"
                text="A chef who is reliable and has his own characteristics in cooking"
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Kotak
                num="30+"
                text="Cooperate with trusted and upscale restaurants"
              />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
