import React, { useEffect, useState } from "react";
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
import axios from "axios";

type AssignedToMenuProps = {
  employee_id: string;
  name: string;
};
type ConfirmDialogProps = {
  name: string;
};

interface Employee {
  id: number;
  employee_firstname: string;
  employee_lastname: string;
}

const ConfirmDialog = (props: ConfirmDialogProps) => {
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
  const [allEmployees, setAllEmployees] = useState([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openAlert, setOpenAlert] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const fetchAllEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/employees");

      setAllEmployees(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllEmployees();
  }, []);
  return (
    <>
      <Button onClick={handleClick}>{props.name}</Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {allEmployees.map((employee: Employee) => {
          return (
            <MenuItem
              key={employee.id}
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <ConfirmDialog
                name={
                  employee.employee_firstname + " " + employee.employee_lastname
                }
              />
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default AssignedToMenu;
