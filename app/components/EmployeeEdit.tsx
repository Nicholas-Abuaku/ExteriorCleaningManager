import {
  Button,
  IconButton,
  Stack,
  FormControl,
  TextField,
  Paper,
} from "@mui/material";
import Link from "next/link";
const EmployeeEdit = () => {
  return (
    <>
      <FormControl component={Paper} sx={{ maxHeight: "80vh", width: "100%" }}>
        <TextField
          required
          id="filled-basic"
          label="Employee First Name"
          variant="filled"
        />
        <TextField
          required
          id="standard-basic"
          label="Empolyee Surname"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          required
        />
        <TextField
          id="standard-basic"
          label="Mobile No."
          variant="standard"
          required
        />
      </FormControl>
      <Stack direction={"row"} marginTop={4}>
        <Button color="success" variant="contained">
          Submit
        </Button>
      </Stack>
    </>
  );
};

export default EmployeeEdit;
