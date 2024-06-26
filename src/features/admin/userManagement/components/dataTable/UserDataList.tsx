import { useEffect } from "react";
import UserDataRow from "./UserDataRow";
import { useState } from "react";
import api from "@utils/axios";
import { getAccessToken } from "@utils/authUtils";
import { CircularProgress } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { AddUserModal } from "@features/admin/userManagement";
import { useSelector } from "react-redux";
import { userFilterTab } from "@data/constants";

import { RootState } from "@store";
import { set } from "date-fns";

export type UserDataRowType = {
  id?: string;
  fullName?: string;
  email?: string;
  status?: string;
  role?: string;
  modal?: boolean;
  isHead?: boolean;
};

type UserDataListProps = {
  searchUsers?: UserDataRowType[];
};

const { CANDIDATE_TAB, EMPLOYER_TAB, ADMIN_TAB } = userFilterTab;

export default function UserDataList(props: UserDataListProps) {
  const [users, setUsers] = useState<UserDataRowType[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [_, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchUsers, setSearchUsers] = useState<UserDataRowType[]>(
    props.searchUsers || []
  );
  const type = useSelector((state: RootState) => state.userFilterTab.tabIndex);

  console.log(props.searchUsers);

  const addUserModalOpen = useSelector(
    (state: RootState) => state.modals.addUserModal
  );

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        let url = "";
        if (type === CANDIDATE_TAB) {
          url = "/users?role=CANDIDATE";
        } else if (type === EMPLOYER_TAB) {
          url = "/users?role=RECRUITER";
        } else if (type === ADMIN_TAB) {
          url = "/users?role=ADMIN";
        } else {
          url = "/users";
        }

        const res = await api.get(`${url}`, {
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
  }, [type]);

  return (
    <>
      {addUserModalOpen && <AddUserModal />}
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
          props.searchUsers?.length === 0 &&
          users.map((userData) => (
            <UserDataRow
              key={userData.id}
              name={userData.fullName}
              {...userData}
            />
          ))}
        {props.searchUsers &&
          props.searchUsers.map((userData) => (
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
