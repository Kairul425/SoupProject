import { Box, Typography, Button } from "@mui/material";

import Dashboard from "../../pages/Dashboard";

const CourseCategory = () => {
  return (
    <div>
      <Dashboard />
      <Box
        sx={{
          width: { sm: "100%", md: "82%" },
          height: "100vh",
          paddingTop: "70px",
          paddingX: { xs: "5px", sm: "30px" },
          marginLeft: { sm: "auto" },
          position: { sm: "absolute" },
          right: 0,
          top: 0,
          overflow: { sm: "auto" },
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "700" }}>
          Course Category
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            marginTop: "20px",
            width: "100px",
            marginBottom: { xs: "6px", sm: "10px" },
          }}
        >
          Add
        </Button>
        <Box
          sx={{
            width: "100%",
            border: "1px solid black",
            paddingX: "7px",
            paddingY: "5px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "100px", sm: "180px" },
              height: { xs: "80px", sm: "100px" },
              background: "blue",
            }}
          ></Box>
          <Box
            sx={{
              marginLeft: "10px",
              width: "70%",
              borderRight: "3px solid black",
              paddingRight: { xs: "5px", sm: "10px" },
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "20px" }, fontWeight: "500" }}
            >
              Name:
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "20px" }, fontWeight: "500" }}
            >
              Description:
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "20px" }, fontWeight: "500" }}
            >
              Status:
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: "10px",
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              justifyContent: "space-between",
              paddingY: "7px",
              gap: { sm: "3px", md: "5px" },
              width: "100px",
            }}
          >
            <Button
              variant="outlined"
              color="success"
              size="small"
              sx={{ width: "100px" }}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="error"
              size="small"
              sx={{ width: "100px" }}
            >
              Delete
            </Button>
          </Box>
          <Box
            sx={{
              marginLeft: { xs: "5px", sm: "10px" },
              display: { xs: "flex", sm: "none" },
              alignItems: "center",
              flexDirection: "column",
              gap: "3px",
              paddingY: "7px",
              width: "50px",
            }}
          >
            <Typography color="success" sx={{ textDecoration: "underline" }}>
              Edit
            </Typography>
            <Typography color="error" sx={{ textDecoration: "underline" }}>
              Delete
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CourseCategory;
