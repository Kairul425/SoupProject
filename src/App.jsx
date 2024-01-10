import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Register from "./pages/Register";
// import ResetPassword from "./pages/ResetPassword";
// import Login from "./pages/Login";

import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <ResetPassword /> */}
      <Register />
    </ThemeProvider>
  );
};

export default App;
