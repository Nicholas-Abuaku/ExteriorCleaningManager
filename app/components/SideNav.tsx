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
      <Box width={"256px"} textAlign={"center"}>
        <Stack spacing={4}>
          <Button endIcon={<WorkIcon />}>
            <Typography variant="h5">Jobs</Typography>
          </Button>
          <Button endIcon={<PersonIcon />}>
            <Typography variant="h5">Employees</Typography>
          </Button>
          <Button endIcon={<MessageIcon />}>
            <Typography variant="h5">Messages</Typography>
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default SideNav;
