import Pagination from "@mui/material/Pagination";
import Divider from "@mui/material/Divider";
import UserDataList from "./UserDataList";
import UserTableFilter from "./UserTableFilter";

export default function UserTable() {
  return (
    <div className="bg-white mt-2">
      <UserTableFilter />
      <Divider sx={{ marginBottom: "2.4rem" }} />
      <UserDataList />
      <div className="flex justify-end">
        <Pagination
          count={10}
          shape="rounded"
          color="primary"
          size="medium"
        ></Pagination>
      </div>
    </div>
  );
}
