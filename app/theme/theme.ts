import { Montserrat } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const montserrat = Montserrat({
  weight: ["300", "700", "400"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = createTheme({
  typography: {
    h1: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: "bold",
      fontSize: "64px",
      color: "white",
    },
    button: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: "bold",
    },
    body1: {
      fontFamily: montserrat.style.fontFamily,
      color: "white",
    },
  },
});
