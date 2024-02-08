import { useState } from "react";

import {
  AppBar,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
} from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CategoryIcon from "@mui/icons-material/Category";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import MenuIcon from "@mui/icons-material/Menu";

const Dashboard = () => {
  const userData = JSON.parse(localStorage.getItem("user"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Box sx={{ width: "100%", display: { xs: "none", md: "block" } }}>
        <AppBar
          color="secondary"
          position="fixed"
          sx={{
            boxShadow: "none",
            height: "70px",
            paddingX: "30px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography
                color="primary"
                sx={{ fontSize: "27px", fontWeight: "bold" }}
              >
                Dashboard
              </Typography>
              <AdminPanelSettingsIcon fontSize="medium" color="primary" />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography
                color="primary"
                sx={{ fontSize: "24px", fontWeight: "700" }}
              >
                welcome {userData.username}
              </Typography>
              <InsertEmoticonIcon
                fontSize="large"
                color="primary"
                sx={{ ml: 1 }}
              />
            </div>
          </Box>
        </AppBar>

        {/* Sidebar */}
        <Box
          sx={{
            paddingTop: "70px",
            width: "18%",
            backgroundColor: "#F5F5F5",
            height: "100vh",
            borderRight: "1px solid #BDBDBD",
          }}
        >
          <List>
            <ListItem sx={{ borderBottom: "1px solid #BDBDBD" }}>
              <ListItemText primary="Course Category" />
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem sx={{ borderBottom: "1px solid #BDBDBD" }}>
              <ListItemText primary="Course" />
              <ListItemIcon>
                <AnalyticsIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem sx={{ borderBottom: "1px solid #BDBDBD" }}>
              <ListItemText primary="All Invoice" />
              <ListItemIcon>
                <FactCheckIcon />
              </ListItemIcon>
            </ListItem>
          </List>
        </Box>
      </Box>

      {/* Mobile Phone */}
      <Box sx={{ width: "100%", display: { xs: "block", md: "none" } }}>
        <AppBar
          color="secondary"
          position="fixed"
          sx={{
            boxShadow: "none",
            height: "50px",
            paddingX: "10px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography
                color="primary"
                sx={{ fontSize: "18px", fontWeight: "700" }}
              >
                welcome {userData.username}
              </Typography>
              <InsertEmoticonIcon fontSize="medium" color="primary" />
            </div>
            <MenuIcon fontSize="large" onClick={() => setDrawerOpen(true)} />
          </Box>
        </AppBar>
        <Drawer
          open={drawerOpen}
          anchor="left"
          onClose={() => setDrawerOpen(false)}
          sx={{ marginTop: "50px" }}
        >
          <List>
            <ListItem
              sx={{
                borderBottom: "1px solid #BDBDBD",
                backgroundColor: "#F5F5F5",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography
                  color="primary"
                  sx={{ fontSize: "27px", fontWeight: "bold" }}
                >
                  Dashboard
                </Typography>
                <AdminPanelSettingsIcon fontSize="medium" color="primary" />
              </div>
            </ListItem>
            <ListItem sx={{ borderBottom: "1px solid #BDBDBD" }}>
              <ListItemText primary="Course Category" />
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem sx={{ borderBottom: "1px solid #BDBDBD" }}>
              <ListItemText primary="Course" />
              <ListItemIcon>
                <AnalyticsIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem sx={{ borderBottom: "1px solid #BDBDBD" }}>
              <ListItemText primary="All Invoice" />
              <ListItemIcon>
                <FactCheckIcon />
              </ListItemIcon>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </>
  );
};

export default Dashboard;
