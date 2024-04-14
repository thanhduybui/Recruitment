import Divider from "@mui/material/Divider";
import UserDataList from "./UserDataList";
import UserTableFilter from "../filter/UserTableFilter";

export default function UserTable() {
  return (
    <div className="bg-white mt-2">
      <UserTableFilter />
      <Divider sx={{ marginBottom: "2.4rem" }} />
      <UserDataList />
    </div>
  );
}
