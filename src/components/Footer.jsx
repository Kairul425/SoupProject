import { Box, Typography, IconButton } from "@mui/material";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import { Link } from "react-router-dom";

const Footer = () => {
  const buttonStyle = {
    backgroundColor: "#FABC1D",
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        paddingX: "95px",
        justifyContent: "space-between",
        paddingY: "24px",
        backgroundColor: "#5B4947",
      }}
    >
      <Box sx={{ width: "350px", marginRight: "80px" }}>
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#FABC1D",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          About
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "14px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "400",
            marginTop: "8px",
          }}
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Typography>
      </Box>
      <Box sx={{ width: "228px", marginRight: "90px" }}>
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#FABC1D",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          Product
        </Typography>
        <Box sx={{ display: "flex", paddingLeft: "15px" }}>
          <Box sx={{ marginTop: "8px", marginRight: "80px" }}>
            <ul style={{ color: "#fff" }}>
              <li
                style={{
                  marginBottom: "8px",
                  fontWeight: "400",
                  fontSize: "14px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                <Link to="/ListMenuClass/Asian" style={{ textDecoration: "none", color: "#fff", whiteSpace: "nowrap" }}>
                Asian
                </Link>
              </li>
              <li
                style={{
                  marginBottom: "8px",
                  fontWeight: "400",
                  fontSize: "14px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                <Link to="/ListMenuClass/Western" style={{ textDecoration: "none", color: "#fff", whiteSpace: "nowrap" }}>
                Western
                </Link>
              </li>
              <li
                style={{
                  marginBottom: "8px",
                  fontWeight: "400",
                  fontSize: "14px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                <Link to="/ListMenuClass/Cookies" style={{ textDecoration: "none", color: "#fff", whiteSpace: "nowrap" }}>
                Cookies
                </Link>
              </li>
              <li
                style={{
                  marginBottom: "8px",
                  fontWeight: "400",
                  fontSize: "14px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                <Link to="/ListMenuClass/Indonesia Food" style={{ textDecoration: "none", color: "#fff", whiteSpace: "nowrap" }}>
                Indonesia Food
                </Link>
              </li>
            </ul>
          </Box>
          <Box sx={{ marginTop: "8px" }}>
            <ul style={{ color: "#fff" }}>
              <li
                style={{
                  marginBottom: "8px",
                  fontWeight: "400",
                  fontSize: "14px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                <Link to="/ListMenuClass/Hot Drink" style={{ textDecoration: "none", color: "#fff", whiteSpace: "nowrap" }}>
                Hot Drink
                </Link>
              </li>
              <li
                style={{
                  marginBottom: "8px",
                  fontWeight: "400",
                  fontSize: "14px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                <Link to="/ListMenuClass/Cold Drink" style={{ textDecoration: "none", color: "#fff", whiteSpace: "nowrap" }}>
                Cold Drink
                </Link>
              </li>
              <li
                style={{
                  marginBottom: "8px",
                  fontWeight: "400",
                  fontSize: "14px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                <Link to="/ListMenuClass/Junk Food" style={{ textDecoration: "none", color: "#fff", whiteSpace: "nowrap" }}>
                Junk Food
                </Link>
              </li>
              <li
                style={{
                  marginBottom: "8px",
                  fontWeight: "400",
                  fontSize: "14px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                <Link to="/ListMenuClass/Desert" style={{ textDecoration: "none", color: "#fff", whiteSpace: "nowrap" }}>
                Desert
                </Link>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#FABC1D",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          Address
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "14px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "400",
            marginTop: "8px",
          }}
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#FABC1D",
            fontWeight: "500",
            fontSize: "16px",
            marginTop: "16px",
          }}
        >
          Contact Us
        </Typography>
        <Box sx={{ display: "flex", gap: "16px", marginTop: "8px" }}>
          <IconButton size="large" style={buttonStyle}>
            <LocalPhoneIcon />
          </IconButton>
          <IconButton size="large" style={buttonStyle}>
            <InstagramIcon />
          </IconButton>
          <IconButton size="large" style={buttonStyle}>
            <YouTubeIcon />
          </IconButton>
          <IconButton size="large" style={buttonStyle}>
            <TelegramIcon />
          </IconButton>
          <IconButton size="large" style={buttonStyle}>
            <MailOutlineIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
