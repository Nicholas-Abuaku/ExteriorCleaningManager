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

const JobsTable = () => {
  const d = new Date();
  const allJobs = [
    {
      id: 1,
      surname: "Banga",
      email: "djBanga@gmail.com",
      postcode: "SL2 2YG",
      house_no: "13",
      services: "Ext Window",
      due: d.toLocaleDateString(),
      assigned_to: "jeevan",
      status: "Pending",
    },
    {
      id: 2,
      surname: "Wheatley",
      email: "ampx15@gmail.com",
      postcode: "SL2 2GY",
      house_no: "4",
      services: "Gutter clean",
      due: d.toLocaleDateString(),
      assigned_to: "Carl",
      status: "Pending",
    },
  ];
  return (
    <>
      <AdminBreadcrumbs />
      <TableContainer component={Paper} sx={{ maxHeight: "80vh" }}>
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
              <TableCell>Assigned to</TableCell>
              <TableCell>Status</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allJobs.map((job) => {
              return (
                <TableRow>
                  <TableCell>{job.id}</TableCell>
                  <TableCell>{job.surname}</TableCell>
                  <TableCell>{job.email}</TableCell>
                  <TableCell>{job.postcode}</TableCell>
                  <TableCell>{job.house_no}</TableCell>
                  <TableCell>{job.services}</TableCell>
                  <TableCell>{job.due.toString()}</TableCell>
                  <TableCell>{job.assigned_to}</TableCell>
                  <TableCell>
                    {<Chip label={job.status} color="warning" />}
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
};

export default JobsTable;
