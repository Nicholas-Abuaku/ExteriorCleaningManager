"use client";
import Image from "next/image";
import {
  ThemeProvider,
  Typography,
  Box,
  Button,
  Stack,
  Grid,
} from "@mui/material";
import { theme } from "./theme/theme";
import HeroSection from "./components/HeroSection";
export default function Home() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Grid
          container
          sx={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "120px",
          }}
        >
          <Grid item xs={12} md={12}>
            <HeroSection />
          </Grid>
        </Grid>
      </ThemeProvider>
    </main>
  );
}
