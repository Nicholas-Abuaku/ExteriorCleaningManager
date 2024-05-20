"use client";
import {
  ThemeProvider,
  Typography,
  Box,
  Button,
  Stack,
  Grid,
} from "@mui/material";
import SideNav from "../components/SideNav";
import JobsTable from "../components/JobsTable";

export default function Admin() {
  return (
    <div style={{ display: "flex" }}>
      <SideNav />
      <div style={{ width: "100%", height: "100%" }}>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item xs={11} sx={{ marginTop: "90px" }}>
            <JobsTable />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
