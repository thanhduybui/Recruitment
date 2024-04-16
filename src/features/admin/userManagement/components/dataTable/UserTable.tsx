import Divider from "@mui/material/Divider";
import UserDataList, { UserDataRowType } from "./UserDataList";
import UserTableFilter from "../filter/UserTableFilter";
import { useEffect, useState } from "react";

export default function UserTable() {
  const [searchUsers, setSearchUsers] = useState<UserDataRowType[]>([]);

  const handleSearchUsers = (users: UserDataRowType[]) => {
    setSearchUsers(users);
  };

  useEffect(() => {}, [searchUsers]);

  return (
    <div className="bg-white mt-2">
      <UserTableFilter getUsers={handleSearchUsers} />
      <Divider sx={{ marginBottom: "2.4rem" }} />
      <UserDataList searchUsers={searchUsers} />
    </div>
  );
}
