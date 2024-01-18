import { Box, Typography } from "@mui/material";

import benefit from "../assets/benefit.png";

const Benefit = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${benefit})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "233px",
        paddingX: { xs: "20px", md: "50px", lg: "80px" },
        display: "flex",
        alignItems: "center",
        marginBottom: "60px",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "600",
            fontSize: { xs: "24px", md: "40px" },
            marginBottom: { xs: "16px", md: "24px" },
          }}
        >
          Gets your best benefit
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#fff",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "500",
            fontSize: { xs: "9px", md: "16px" },
          }}
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam.
        </Typography>
      </Box>
    </Box>
  );
};

export default Benefit;
