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
import { IconButton } from "@mui/material";

const JobsTable = () => {
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
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Abuaku</TableCell>
              <TableCell>abuaku1400@gmail.com</TableCell>
              <TableCell>SL2 2AQ</TableCell>
              <TableCell>28</TableCell>
              <TableCell>Window</TableCell>
              <TableCell>21/05/2024</TableCell>
              <TableCell>Jeevan</TableCell>
              <TableCell>
                <Chip label="Completed" color="success" />
              </TableCell>
              <TableCell>
                <IconButton>
                  <ArrowDropDownCircleIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Abuaku</TableCell>
              <TableCell>abuaku1400@gmail.com</TableCell>
              <TableCell>SL2 2AQ</TableCell>
              <TableCell>28</TableCell>
              <TableCell>Window</TableCell>
              <TableCell>21/05/2024</TableCell>
              <TableCell>Jeevan</TableCell>
              <TableCell>
                {" "}
                <Chip label="Pending" color="warning" />
              </TableCell>
              <TableCell>
                <IconButton>
                  <ArrowDropDownCircleIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Abuaku</TableCell>
              <TableCell>abuaku1400@gmail.com</TableCell>
              <TableCell>SL2 2AQ</TableCell>
              <TableCell>28</TableCell>
              <TableCell>Window</TableCell>
              <TableCell>21/05/2024</TableCell>
              <TableCell>Jeevan</TableCell>
              <TableCell>
                <Chip label="Cancelled" color="error" />
              </TableCell>
              <TableCell>
                <IconButton>
                  <ArrowDropDownCircleIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Abuaku</TableCell>
              <TableCell>abuaku1400@gmail.com</TableCell>
              <TableCell>SL2 2AQ</TableCell>
              <TableCell>28</TableCell>
              <TableCell>Window</TableCell>
              <TableCell>21/05/2024</TableCell>
              <TableCell>Jeevan</TableCell>
              <TableCell>
                {" "}
                <Chip label="Pending" color="warning" />
              </TableCell>
              <TableCell>
                <IconButton>
                  <ArrowDropDownCircleIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Abuaku</TableCell>
              <TableCell>abuaku1400@gmail.com</TableCell>
              <TableCell>SL2 2AQ</TableCell>
              <TableCell>28</TableCell>
              <TableCell>Window</TableCell>
              <TableCell>21/05/2024</TableCell>
              <TableCell>Jeevan</TableCell>
              <TableCell>
                {" "}
                <Chip label="Pending" color="warning" />
              </TableCell>
              <TableCell>
                <IconButton>
                  <ArrowDropDownCircleIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Abuaku</TableCell>
              <TableCell>abuaku1400@gmail.com</TableCell>
              <TableCell>SL2 2AQ</TableCell>
              <TableCell>28</TableCell>
              <TableCell>Window</TableCell>
              <TableCell>21/05/2024</TableCell>
              <TableCell>Jeevan</TableCell>
              <TableCell>
                {" "}
                <Chip label="Pending" color="warning" />
              </TableCell>
              <TableCell>
                <IconButton>
                  <ArrowDropDownCircleIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Abuaku</TableCell>
              <TableCell>abuaku1400@gmail.com</TableCell>
              <TableCell>SL2 2AQ</TableCell>
              <TableCell>28</TableCell>
              <TableCell>Window</TableCell>
              <TableCell>21/05/2024</TableCell>
              <TableCell>Jeevan</TableCell>
              <TableCell>
                {" "}
                <Chip label="Pending" color="warning" />
              </TableCell>
              <TableCell>
                <IconButton>
                  <ArrowDropDownCircleIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Abuaku</TableCell>
              <TableCell>abuaku1400@gmail.com</TableCell>
              <TableCell>SL2 2AQ</TableCell>
              <TableCell>28</TableCell>
              <TableCell>Window</TableCell>
              <TableCell>21/05/2024</TableCell>
              <TableCell>Jeevan</TableCell>
              <TableCell>
                {" "}
                <Chip label="Pending" color="warning" />
              </TableCell>
              <TableCell>
                <IconButton>
                  <ArrowDropDownCircleIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Abuaku</TableCell>
              <TableCell>abuaku1400@gmail.com</TableCell>
              <TableCell>SL2 2AQ</TableCell>
              <TableCell>28</TableCell>
              <TableCell>Window</TableCell>
              <TableCell>21/05/2024</TableCell>
              <TableCell>Jeevan</TableCell>
              <TableCell>
                {" "}
                <Chip label="Pending" color="warning" />
              </TableCell>
              <TableCell>
                <IconButton>
                  <ArrowDropDownCircleIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Abuaku</TableCell>
              <TableCell>abuaku1400@gmail.com</TableCell>
              <TableCell>SL2 2AQ</TableCell>
              <TableCell>28</TableCell>
              <TableCell>Window</TableCell>
              <TableCell>21/05/2024</TableCell>
              <TableCell>Jeevan</TableCell>
              <TableCell>
                {" "}
                <Chip label="Pending" color="warning" />
              </TableCell>
              <TableCell>
                <IconButton>
                  <ArrowDropDownCircleIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default JobsTable;
