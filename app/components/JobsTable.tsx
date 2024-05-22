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

const JobsTable = () => {
  const d = new Date();
  const allJobs = [
    {
      id: 1,
      client_surname: "Lucci",
      client_email: "RobertoLucci@gmail.com",
      postcode: "SL2 2YG",
      house_no: "13",
      services: "Ext Window",
      due: d.toLocaleDateString(),
      assigned_to: "Jeevan",
      status: "Completed",
    },
    {
      id: 2,
      client_surname: "Flanagan",
      client_email: "FraserFlan@gmail.com",
      postcode: "SL2 2GG",
      house_no: "4",
      services: "Gutter clean",
      due: d.toLocaleDateString(),
      assigned_to: "Carl",
      status: "Pending",
    },
    {
      id: 3,
      client_surname: "Smith",
      client_email: "BoringName@gmail.com",
      postcode: "SL3 3UJ",
      house_no: "210",
      services: "Gutter clean",
      due: d.toLocaleDateString(),
      assigned_to: "Fraser",
      status: "Cancelled",
    },
    {
      id: 4,
      client_surname: "Jones",
      client_email: "BoringNameJones@gmail.com",
      postcode: "SL3 3UW",
      house_no: "210",
      services: "Gutter Repair",
      due: d.toLocaleDateString(),
      assigned_to: "Fraser",
      status: "Pending",
    },
    {
      id: 5,
      client_surname: "Singh",
      client_email: "HarpreetSingh@gmail.com",
      postcode: "SL1 1UD",
      house_no: "210",
      services: "Gutter clean",
      due: d.toLocaleDateString(),
      assigned_to: "Fraser",
      status: "Pending",
    },
    {
      id: 6,
      client_surname: "Abbas",
      client_email: "AliAbbas@gmail.com",
      postcode: "SL1 1UD",
      house_no: "210",
      services: "Gutter clean",
      due: d.toLocaleDateString(),
      assigned_to: "Fraser",
      status: "Pending",
    },
    {
      id: 7,
      client_surname: "Mirza",
      client_email: "HaseebMirza@gmail.com",
      postcode: "SL1 1UD",
      house_no: "210",
      services: "Gutter clean",
      due: d.toLocaleDateString(),
      assigned_to: "Fraser",
      status: "Cancelled",
    },
    {
      id: 8,
      client_surname: "Johnson",
      client_email: "UmarJohnson@gmail.com",
      postcode: "SL1 1UD",
      house_no: "210",
      services: "Gutter clean",
      due: d.toLocaleDateString(),
      assigned_to: "Fraser",
      status: "Completed",
    },
    {
      id: 9,
      client_surname: "Jittleyang",
      client_email: "realMFJittleyang@gmail.com",
      postcode: "SL1 1UD",
      house_no: "210",
      services: "Gutter clean",
      due: d.toLocaleDateString(),
      assigned_to: "Fraser",
      status: "Pending",
    },
    {
      id: 10,
      client_surname: "Newell",
      client_email: "GabeN@gmail.com",
      postcode: "SL1 1UD",
      house_no: "210",
      services: "Gutter clean",
      due: d.toLocaleDateString(),
      assigned_to: "Fraser",
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
              <TableCell>Client Surname</TableCell>
              <TableCell>Client Email</TableCell>
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
                  <TableCell>{job.client_surname}</TableCell>
                  <TableCell>{job.client_email}</TableCell>
                  <TableCell>{job.postcode}</TableCell>
                  <TableCell>{job.house_no}</TableCell>
                  <TableCell>{job.services}</TableCell>
                  <TableCell>{job.due.toString()}</TableCell>
                  <TableCell>
                    <AssignedToMenu name={job.assigned_to} />
                  </TableCell>
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
