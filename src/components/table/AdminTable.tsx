import { Divider } from "@mui/material";
import { TableFilter } from "@components/table";
import { UserTable } from "@features/userManagement";

export default function AdminTable() {
  return (
    <div className="bg-white h-screen mt-2">
      <TableFilter />
      <Divider />
      <UserTable />
    </div>
  );
}
