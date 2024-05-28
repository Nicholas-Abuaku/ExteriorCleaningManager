import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Menu,
  MenuItem,
} from "@mui/material";

type AssignedToMenuProps = {
  name: string;
};

const ConfirmDialog = (props: AssignedToMenuProps) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={handleClickOpen}>{props.name}</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Employee Change?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You are about to re-assign this job to {props.name}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Confirm</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const AssignedToMenu = (props: AssignedToMenuProps) => {
  const allEmployees = [
    {
      id: 1,
      firstname: "Banga",
      surname: "Bangas",
      email: "bangaBangas@gmail.com",
      mobile_no: "07735645287",
      jobs: [
        {
          job_id: 1,
          surname: "Lucci",
          email: "RobertLucci@gmail.com",
          postcode: "SL2 2AQ",
          services: "Ext Window",
          house_no: "28",
          due: "21/05/2024",
          mobile_no: "07760135389",
          status: "pending",
        },
        {
          job_id: 2,
          surname: "Lucci",
          email: "RobertLucci@gmail.com",
          postcode: "SL2 2AQ",
          services: "Ext Window",
          house_no: "28",
          due: "21/05/2024",
          mobile_no: "07760135389",
          status: "pending",
        },
      ],
    },
    {
      id: 2,
      firstname: "Carl",
      surname: "Wheatley",
      email: "ampx15@gmail.com",
      mobile_no: "07735235287",
      jobs: [
        {
          job_id: 3,
          surname: "Keef",
          email: "ChiefKeef@gmail.com",
          postcode: "CO4 3TZ",
          services: "Ext Window",
          house_no: "28",
          due: "21/05/2024",
          mobile_no: "07760135389",
          status: "pending",
        },
        {
          job_id: 4,
          surname: "Lucci",
          email: "RobertLucci@gmail.com",
          postcode: "SL2 2AQ",
          services: "Gutter Clean",
          house_no: "28",
          due: "21/05/2024",
          mobile_no: "07760135389",
          status: "pending",
        },
      ],
    },
    {
      id: 3,
      firstname: "Fraser",
      surname: "Flanagan",
      email: "droneStrikesRUs@gmail.com",
      mobile_no: "07735645287",
      jobs: [
        {
          job_id: 5,
          surname: "Lucci",
          email: "RobertLucci@gmail.com",
          postcode: "SL2 2AQ",
          services: "Ext Window",
          house_no: "28",
          due: "21/05/2024",
          mobile_no: "07760135389",
          status: "pending",
        },
        {
          job_id: 6,
          surname: "Lucci",
          email: "RobertLucci@gmail.com",
          postcode: "SL2 2AQ",
          services: "Ext Window",
          house_no: "28",
          due: "21/05/2024",
          mobile_no: "07760135389",
          status: "pending",
        },
      ],
    },
  ];
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openAlert, setOpenAlert] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>{props.name}</Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {allEmployees.map((employee) => {
          return (
            <MenuItem
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <ConfirmDialog
                name={employee.firstname + " " + employee.surname}
              />
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default AssignedToMenu;
