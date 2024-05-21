"use client";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";

import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import {
  Button,
  IconButton,
  Stack,
  Grid,
  Typography,
  ThemeProvider,
} from "@mui/material";
import Link from "next/link";
import EmployeeEdit from "@/app/components/EmployeeEdit";
import { theme } from "@/app/theme/theme";
import SideNav from "@/app/components/SideNav";
const NewEmployee = () => {
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
            <EmployeeEdit />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default NewEmployee;
