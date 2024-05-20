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
import { Button, IconButton, Stack } from "@mui/material";

const EmployeeTable = () => {
  return (
    <>
      <Button
        variant="contained"
        color="success"
        sx={{ float: "right", marginBottom: "4px" }}
      >
        +
      </Button>
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
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Jeevan</TableCell>
              <TableCell>Banga</TableCell>
              <TableCell>onlyBangas@gmail.com</TableCell>
              <TableCell>01753711711</TableCell>
              <TableCell>
                <a href="#">View Active Jobs</a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default EmployeeTable;
