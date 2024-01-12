import { Box, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    brown: {
      main: "#5B4947",
    },
    orange: {
      main: "#FABC1D",
    },
  },
});

const ButtonNavbar = (props) => {
  const buttonStyle = {
    width: "175px",
    borderRadius: "8px",
    padding: "5px 20px",
    color: "#5B4947",
    fontSize: "16px",
    textTransform: "none",
    fontFamily: "Montserrat",
    fontWeight: "500",
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", gap: "16px" }}>
        <Link to={props.firstLink} style={{ textDecoration: 'none' }}>
          <Button variant="outlined" style={buttonStyle} color="brown">
            {props.first}
          </Button>
        </Link>
        <Link to={props.lastLink} style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            style={buttonStyle}
            color="orange"
            sx={{ boxShadow: "none" }}
          >
            {props.last}
          </Button>
        </Link>
      </Box>
    </ThemeProvider>
  );
};

export default ButtonNavbar;
