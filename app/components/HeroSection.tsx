import { Box, Typography, Stack, Button } from "@mui/material";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import WindowCleaner from "../assets/cleaning.jpg";
const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "150px",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "23.4375vw" }}>
        <Typography variant="h1">
          Streamline Your Exterior Cleaning Business
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginTop: "20px", marginBottom: "20px" }}
        >
          Juggling estimates, scheduling, and client communication can be a
          time-consuming headache. Our user-friendly job management system helps
          you organize your business, boost efficiency, and impress your clients
        </Typography>
        <Stack direction={"row"} spacing={2} sx={{ display: "inline-block" }}>
          <Link href="/dashboard/all-jobs">
            <Button variant="contained" sx={{ backgroundColor: "#FB610A" }}>
              Demo
            </Button>
          </Link>
          <Button variant="contained" sx={{ backgroundColor: "#FB610A" }}>
            Pricing
          </Button>
        </Stack>
      </Box>
      <Box marginLeft={"40px"}>
        <Image
          src={WindowCleaner.src}
          alt="blah"
          width={612}
          height={408}
          sizes="612px"
          style={{ borderRadius: "5px" }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
