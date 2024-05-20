"use client";
import { Typography, Grid, ThemeProvider, Stack } from "@mui/material";
import React from "react";
import SideNav from "../components/SideNav";
import { theme } from "../theme/theme";
import EmployeeTable from "../components/EmployeeTable";

const employees = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideNav />
      <div style={{ width: "100%", height: "100%" }}>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item xs={11}>
            <Stack>
              <ThemeProvider theme={theme}>
                <Typography variant="h3">Employees</Typography>
                <Typography variant="h6"> View all employees</Typography>
              </ThemeProvider>
            </Stack>
          </Grid>
          <Grid item xs={11} sx={{ marginTop: "10px" }}>
            <EmployeeTable />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default employees;
