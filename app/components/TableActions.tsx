import { ArrowDropDownCircle } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Snackbar } from "@mui/material";
import React, { useState } from "react";

type DeleteSnackBarProps = {
  open: boolean;
  handleClose: (event: React.SyntheticEvent | Event, reason?: string) => void;
};
const DeleteSnackBar: React.FC<DeleteSnackBarProps> = ({
  open,
  handleClose,
}) => {
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Job Deleted"
      />
    </>
  );
};

const TableActions = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    //api call logic

    setSnackBarOpen(true);
  };
  const handleSnackBarClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBarOpen(false);
  };
  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ArrowDropDownCircle />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
        <MenuItem>Blah</MenuItem>
      </Menu>

      <DeleteSnackBar open={snackBarOpen} handleClose={handleSnackBarClose} />
    </>
  );
};

export default TableActions;
