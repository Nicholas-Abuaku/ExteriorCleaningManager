import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import React from "react";

const AdminBreadcrumbs = () => {
  return (
    <>
      <Box>
        <Breadcrumbs aria-label="breadcrumb" sx={{ color: "white" }}>
          <Link underline="hover" href="/">
            Dashboard
          </Link>
          <Link underline="hover" href="#">
            Jobs
          </Link>
        </Breadcrumbs>
      </Box>
    </>
  );
};

export default AdminBreadcrumbs;
