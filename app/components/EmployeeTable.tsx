"use client";
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
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import EmployeeActiveJobs from "./EmployeeActiveJobs";
interface Employee {
  id: string;
  employee_firstname: string;
  employee_lastname: string;
  employee_email: string;
  employee_mobile: string;
}
const EmployeeTable = () => {
  const [showJobs, setShowJobs] = useState(false);
  const [allEmployees, setAllEmployees] = useState([]);
  const fetchEmployees = async () => {
    try {
      const response = await axios.get("/api/employees");
      console.log(response.data);
      setAllEmployees(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);
  const allEmployees2 = [
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
          status: "Completed",
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
          status: "Pending",
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
          status: "Cancelled",
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
          status: "Completed",
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
          status: "Pending",
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
          status: "Pending",
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
            {allEmployees.map((employee: Employee) => {
              return (
                <TableRow key={employee.id}>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>{employee.employee_firstname}</TableCell>
                  <TableCell>{employee.employee_lastname}</TableCell>
                  <TableCell>{employee.employee_email}</TableCell>
                  <TableCell>{employee.employee_mobile}</TableCell>
                  <TableCell>
                    <EmployeeActiveJobs emp_id={employee.id} />
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
