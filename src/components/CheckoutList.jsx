import { useState } from "react";

import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  IconButton,
} from "@mui/material";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import spageti from "../assets/spageti.png";
import soto from "../assets/soto.png";
import ramen from "../assets/ramen.png";

class ChecoutList {
  constructor(id, image, name, description, time, price) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.description = description;
    this.time = time;
    this.price = price;
  }
}

const data = [
  new ChecoutList(
    0,
    soto,
    "Asian",
    "Tom Yum Thailand",
    "Schedule : Wednesday, 27 July 2022",
    "IDR 450.00"
  ),
  new ChecoutList(
    1,
    ramen,
    "Asian",
    "Ichiraku Ramen",
    "Schedule : Sunday, 24 July 2022",
    "IDR 300.00"
  ),
  new ChecoutList(
    2,
    spageti,
    "Eastern",
    "Italian Spaghetti Bolognese",
    "Schedule : Monday, 25 July 2022",
    "IDR 450.00"
  ),
];

const CheckoutList = () => {
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value.id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value.id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleToggleAll = () => {
    if (checked.length === data.length) {
      setChecked([]);
    } else {
      const allChecked = data.map((value) => value.id);
      setChecked(allChecked);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginBottom: "120px",
      }}
    >
      <Box
        sx={{
          paddingX: { xs: "0", sm: "27px" },
        }}
      >
        <List
          sx={{
            width: "100%",
          }}
        >
          <ListItem
            dense
            sx={{
              borderBottom: "1px solid #E0E0E0",
              paddingY: { xs: "10px", sm: "24px" },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: "10px", sm: "25px" },
              }}
            >
              <Checkbox
                edge="start"
                checked={checked.length === data.length}
                onChange={handleToggleAll}
                color="default"
              />
              <Typography
                sx={{
                  color: "#333333",
                  fontWeight: "400",
                  fontSize: "20px",
                }}
              >
                Pilih Semua
              </Typography>
            </Box>
          </ListItem>
          {data.map((value) => {
            return (
              <ListItem
                key={value.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                    <DeleteForeverIcon
                      fontSize="large"
                      sx={{ color: "#EB5757" }}
                    />
                  </IconButton>
                }
                sx={{
                  borderBottom: "1px solid #E0E0E0",
                  paddingY: { xs: "5px", sm: "24px" },
                }}
              >
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(value)}
                  dense
                >
                  <ListItemIcon sx={{ marginLeft: "-20px" }}>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value.id) !== -1}
                      tabIndex={-1}
                      disableRipple
                      color="default"
                    />
                  </ListItemIcon>
                  <Box
                    sx={{
                      display: "flex",
                      marginLeft: { xs: "-24px", sm: "0" },
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: "180px", sm: "200px" },
                        height: { xs: "120px", sm: "130px" },
                      }}
                    >
                      <img
                        src={value.image}
                        alt={value.name}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </Box>
                    <Box sx={{ marginLeft: { xs: "7px", sm: "24px" } }}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#828282",
                          fontWeight: "400",
                          fontSize: { xs: "12px", sm: "14px" },
                          marginY: { xs: "3px", sm: "5px" },
                        }}
                      >
                        {value.name}
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          color: "#333333",
                          fontWeight: "600",
                          fontSize: { xs: "13px", sm: "24px" },
                        }}
                      >
                        {value.description}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#4F4F4F",
                          fontWeight: "400",
                          fontSize: { xs: "12px", sm: "16px" },

                          marginY: { xs: "4px", sm: "8px" },
                        }}
                      >
                        {value.time}
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          color: "#FABC1D",
                          fontWeight: "600",
                          fontSize: { xs: "12px", sm: "20px" },
                        }}
                      >
                        {value.price}
                      </Typography>
                    </Box>
                  </Box>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Container>
  );
};

export default CheckoutList;
