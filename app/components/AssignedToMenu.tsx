import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

type AssignedToMenuProps = {
  name: string;
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
            <MenuItem onClick={handleClose}>
              {employee.firstname + " " + employee.surname}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default AssignedToMenu;
