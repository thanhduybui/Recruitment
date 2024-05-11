import {
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FormWorkingProcess } from "../..";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export default function WorkingProcess() {
  return (
    <TableContainer
      style={{ border: "1px solid #eaeaea", borderRadius: "5px" }}
    >
      <Table>
        <TableHead sx={{ backgroundColor: "#eaeaea" }}>
          <TableRow>
            <TableCell style={{ width: "10%" }}>STT</TableCell>
            <TableCell style={{ width: "70%" }}>Mô tả công việc</TableCell>
            <TableCell
              style={{
                width: "10%",
              }}
            >
              <Button
                startIcon={<AddIcon></AddIcon>}
                variant="contained"
                color="primary"
                size="small"
              >
                Thêm
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>1</TableCell>
            <TableCell
              style={{
                borderLeft: "1px solid #eaeaea",
                borderRight: "1px solid #eaeaea",
              }}
            >
              <FormWorkingProcess />
            </TableCell>
            <TableCell>
              <IconButton>
                <DeleteIcon color="error" />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
