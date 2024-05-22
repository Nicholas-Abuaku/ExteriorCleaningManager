import React, { useState } from "react";

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

type Job = {
  job_id: number;
  surname: string;
  email: string;
  postcode: string;
  house_no: string;
  services: string;
  due: string;
  mobile_no: string;
  status: string;
};
type EmployeeActiveJobsProps = {
  jobs: Job[];
};
const EmployeeActiveJobs = (props: EmployeeActiveJobsProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
                {props.jobs.map((job) => {
                  return (
                    <TableRow>
                      <TableCell>{job.job_id}</TableCell>
                      <TableCell>{job.surname}</TableCell>
                      <TableCell>{job.email}</TableCell>
                      <TableCell>{job.postcode}</TableCell>
                      <TableCell>{job.house_no}</TableCell>
                      <TableCell>{job.services}</TableCell>
                      <TableCell>{job.due}</TableCell>
                      <TableCell>{job.mobile_no}</TableCell>
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
