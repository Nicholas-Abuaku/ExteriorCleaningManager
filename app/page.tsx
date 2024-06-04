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
import HomePageFeatures from "./components/HomePageFeatures";
export default function Home() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Grid
          container
          sx={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "auto",
          }}
        >
          <Grid item xs={12} md={12} marginBottom={20}>
            <HeroSection />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {/* <HomePageFeatures /> */}
        </Grid>
      </ThemeProvider>
    </main>
  );
}
