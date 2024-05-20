import { Montserrat } from "next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const montserrat = Montserrat({
  weight: ["300", "700", "400"],
  subsets: ["latin"],
  display: "swap",
});

export let theme = createTheme({
  typography: {
    h1: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: "bold",
      fontSize: "64px",
      color: "white",
    },
    h3: {
      fontFamily: montserrat.style.fontFamily,
      color: "white",
    },
    button: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: "bold",
      fontSize: "23px",
    },
    body1: {
      fontFamily: montserrat.style.fontFamily,
      color: "white",
    },
    h5: {
      fontFamily: montserrat.style.fontFamily,
    },
    h6: {
      fontFamily: montserrat.style.fontFamily,
      color: "white",
    },
  },
});

theme = responsiveFontSizes(theme);
