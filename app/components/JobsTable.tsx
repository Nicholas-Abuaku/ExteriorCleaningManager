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
import { Badge, IconButton } from "@mui/material";
import TableActions from "./TableActions";
import AssignedToMenu from "./AssignedToMenu";
import AllJobs from "../dashboard/all-jobs/page";
import axios from "axios";
import { get } from "http";
import { useEffect, useState } from "react";
interface Job {
  id: string;
  emp_id: string;
  client_surname: string;
  client_email: string;
  client_postcode: string;
  client_house_num: string;
  assigned_to: {
    employee_firstname: string;
    employee_lastname: string;
  };
  date_due: Date;
  status: string;
}

export function JobsTable() {
  const d = new Date();
  const [allJobs, setAllJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/jobs");
      console.log(response);
      setAllJobs(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <>
      <AdminBreadcrumbs />
      <TableContainer component={Paper} sx={{ maxHeight: "80vh" }}>
        <Table sx={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell>Job ID</TableCell>
              <TableCell>Client Surname</TableCell>
              <TableCell>Client Email</TableCell>
              <TableCell>Postcode</TableCell>
              <TableCell>House No.</TableCell>
              {/* <TableCell>Services</TableCell> */}
              <TableCell>Due</TableCell>
              <TableCell>Assigned to</TableCell>
              <TableCell>Status</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allJobs.map((job: Job) => {
              return (
                <TableRow key={job.id}>
                  <TableCell>{job.id}</TableCell>
                  <TableCell>{job.client_surname}</TableCell>
                  <TableCell>{job.client_email}</TableCell>
                  <TableCell>{job.client_postcode}</TableCell>
                  <TableCell>{job.client_house_num}</TableCell>
                  {/* <TableCell>{job.services}</TableCell> */}
                  <TableCell>{job.date_due.toString()}</TableCell>
                  <TableCell>
                    <AssignedToMenu
                      employee_id={job.emp_id}
                      name={
                        job.assigned_to.employee_firstname +
                        " " +
                        job.assigned_to.employee_lastname
                      }
                    />
                  </TableCell>
                  <TableCell>
                    {
                      <Chip
                        label={job.status}
                        color={
                          job.status === "COMPLETED"
                            ? "success"
                            : job.status === "PENDING"
                            ? "warning"
                            : "error"
                        }
                      />
                    }
                  </TableCell>
                  <TableCell>
                    <TableActions />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default JobsTable;
