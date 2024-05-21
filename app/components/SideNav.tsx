import React from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  ThemeProvider,
  Typography,
  drawerClasses,
  makeStyles,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import { theme } from "../theme/theme";
import Link from "next/link";
const SideNav = () => {
  return (
    <Drawer
      sx={{
        minWidth: "240px",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
      variant="permanent"
      anchor="left"
    >
      <ThemeProvider theme={theme}>
        <Box width={"256px"} textAlign={"center"}>
          <Stack spacing={4}>
            <Link href={"/dashboard/all-jobs"}>
              <Button endIcon={<WorkIcon />}>
                <Typography variant="h5">Jobs</Typography>
              </Button>
            </Link>
            <Button endIcon={<MessageIcon />}>
              <Typography variant="h5">Job Requests</Typography>
            </Button>
            <Link href={"/dashboard/employees"}>
              <Button endIcon={<PersonIcon />}>
                <Typography variant="h5">Employees</Typography>
              </Button>
            </Link>
            <Button endIcon={<MessageIcon />}>
              <Typography variant="h5">Messages</Typography>
            </Button>
            <Button endIcon={<MessageIcon />}>
              <Typography variant="h5">Invoices</Typography>
            </Button>
          </Stack>
        </Box>
      </ThemeProvider>
    </Drawer>
  );
};

export default SideNav;
