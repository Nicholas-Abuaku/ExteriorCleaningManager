import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import AdminBreadcrumbs from "./AdminBreadcrumbs";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { Box, Button, IconButton, Modal, Stack } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import EmployeeActiveJobs from "./EmployeeActiveJobs";

const EmployeeTable = () => {
  const [showJobs, setShowJobs] = useState(false);
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
      firstname: "Barack",
      surname: "Obama",
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
  return (
    <>
      <Link href={"/dashboard/employees/new"}>
        <Button
          variant="contained"
          color="success"
          sx={{ float: "right", marginBottom: "4px" }}
        >
          +
        </Button>
      </Link>
      <AdminBreadcrumbs />
      <TableContainer component={Paper} sx={{ maxHeight: "80vh" }}>
        <Table sx={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell>Employee ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Surname</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Mobile No.</TableCell>
              <TableCell>Jobs</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allEmployees.map((employee) => {
              return (
                <TableRow>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>{employee.firstname}</TableCell>
                  <TableCell>{employee.surname}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.mobile_no}</TableCell>
                  <TableCell>
                    <EmployeeActiveJobs jobs={employee.jobs} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default EmployeeTable;
