import { useEffect } from "react";
import UserDataRow from "./UserDataRow";
import { useState } from "react";
import api from "@utils/axios";
import { getAccessToken } from "@utils/authUtils";
import { CircularProgress } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const userData = [
  {
    id: "20011",
    name: "John Doe",
    email: "johndoe@gmail.com",
    status: "Hoạt động",
    role: "Admin",
  },
];

const additionalUsers: typeof userData = [];

for (let i = 1; i <= 10; i++) {
  additionalUsers.push({
    id: (parseInt(userData[0].id) + i).toString(),
    name: `User ${i}`,
    email: `user${i}@example.com`,
    status: "Hoạt động", // Update the dates as needed
    role: "User",
  });
}

type UserDataRowType = {
  id?: string;
  fullName?: string;
  email?: string;
  status?: string;
  role?: string;
  modal?: boolean;
  isHead?: boolean;
};

export default function UserDataList() {
  const [users, setUsers] = useState<UserDataRowType[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const res = await api.get("/users", {
          headers: { Authorization: "Bearer " + getAccessToken() },
        });

        const { listData, currentPage, totalPages } = res.data.data;
        setTotalPages(totalPages);
        setCurrentPage(currentPage);
        setUsers(listData);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-2 mt-4 mb-10 overflow-x-auto">
        <UserDataRow
          isHead={true}
          id="ID"
          name="Tên"
          email="Email"
          status="Trạng thái"
          role="Vai trò"
        />
        {loading && <CircularProgress />}
        {!loading &&
          users.map((userData) => (
            <UserDataRow
              key={userData.id}
              name={userData.fullName}
              {...userData}
            />
          ))}
        {!loading && (!users || users.length === 0) && <p>No users found</p>}
      </div>
      <div className="flex justify-end">
        <Pagination
          count={totalPages}
          shape="rounded"
          color="primary"
          size="medium"
        />
      </div>
    </>
  );
}
