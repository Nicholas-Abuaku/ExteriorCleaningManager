"use client";
import {
  ThemeProvider,
  Typography,
  Box,
  Button,
  Stack,
  Grid,
} from "@mui/material";
import SideNav from "../../components/SideNav";
import JobsTable from "../../components/JobsTable";
import AdminBreadcrumbs from "../../components/AdminBreadcrumbs";
import { theme } from "../../theme/theme";

export default function AllJobs() {
  return (
    <div style={{ display: "flex" }}>
      <SideNav />
      <div style={{ width: "100%", height: "100%" }}>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item xs={11}>
            <Stack>
              <ThemeProvider theme={theme}>
                <Typography variant="h3">Jobs</Typography>
                <Typography variant="h6"> All Jobs in the database</Typography>
              </ThemeProvider>
            </Stack>
          </Grid>
          <Grid item xs={11} sx={{ marginTop: "10px" }}>
            <JobsTable />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
