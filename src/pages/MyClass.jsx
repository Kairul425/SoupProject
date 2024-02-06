import {
  Container,
  List,
  ListItem,
  ListItemButton,
  Box,
  Typography,
} from "@mui/material";

import Footer from "../components/Footer";

import soto from "../assets/soto.png";

const MyClass = () => {
  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          marginTop: "90px",
          marginBottom: "400px",
        }}
      >
        <List>
          <ListItem sx={{ borderBottom: "1px solid #BDBDBD" }}>
            <ListItemButton>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img src={soto} alt="name" width={"200px"} height={"135px"} />
                <Box sx={{ marginLeft: "24px" }}>
                  <Typography
                    sx={{
                      color: "#828282",
                      fontFamily: "poppins, sans-serif",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  >
                    Asian
                  </Typography>
                  <Typography
                    sx={{
                      color: "#333333",
                      fontFamily: "poppins, sans-serif",
                      fontSize: "24px",
                      fontWeight: "600",
                    }}
                  >
                    Tom Yum Thailand
                  </Typography>
                  <Typography
                    sx={{
                      color: "#FABC1D",
                      fontFamily: "poppins, sans-serif",
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                  >
                    Schedule : Wednesday, 27 July 2022
                  </Typography>
                </Box>
              </Box>
            </ListItemButton>
          </ListItem>
        </List>
      </Container>

      <Footer />
    </div>
  );
};

export default MyClass;
