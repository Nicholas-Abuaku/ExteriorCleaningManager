"use client";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import {
  Box,
  Modal,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Table,
  TableBody,
  Chip,
} from "@mui/material";
import axios from "axios";
interface Service {
  connect: {
    id: number;
  };
}
interface Job {
  id: string;
  client_firstname: string;
  client_surname: string;
  client_email: string;
  client_postcode: string;
  client_house_num: string;
  client_mobile: string;
  date_due: string;
  services: {
    create: Service[];
  };
  status: string;
}
type EmployeeActiveJobsProps = {
  emp_id: string;
};
const EmployeeActiveJobs = (props: EmployeeActiveJobsProps) => {
  const emp_id = props.emp_id;
  const [jobs, setJobs] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchEmployeeJobs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/employees/" + emp_id + "/jobs"
      );
      console.log(response.data);
      setJobs(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEmployeeJobs();
  }, []);
  return (
    <>
      <Button onClick={handleOpen}>View Active Jobs</Button>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              maxHeight: "80vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Table sx={{ width: "100%" }}>
              <TableHead>
                <TableRow>
                  <TableCell>Job ID</TableCell>

                  <TableCell>Surname</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Postcode</TableCell>
                  <TableCell>House No.</TableCell>
                  <TableCell>Services</TableCell>
                  <TableCell>Due</TableCell>
                  <TableCell>Mobile No.</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jobs.map((job: Job) => {
                  return (
                    <TableRow key={job.id}>
                      <TableCell>{job.id}</TableCell>
                      <TableCell>{job.client_surname}</TableCell>
                      <TableCell>{job.client_email}</TableCell>
                      <TableCell>{job.client_postcode}</TableCell>
                      <TableCell>{job.client_house_num}</TableCell>
                      {/* <TableCell>{job.services}</TableCell> */}
                      <TableCell>{job.date_due}</TableCell>
                      <TableCell>{job.client_mobile}</TableCell>
                      <TableCell>
                        {
                          <Chip
                            label={job.status}
                            color={
                              job.status === "Completed"
                                ? "success"
                                : job.status === "Pending"
                                ? "warning"
                                : "error"
                            }
                          />
                        }
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </>
  );
};

export default EmployeeActiveJobs;
