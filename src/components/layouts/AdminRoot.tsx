import { Outlet } from "react-router-dom";
import { AdminHeader } from "./header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRole } from "@store/role";
import { Roles } from "@data/constants";

export default function AdminRoot() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRole(Roles.ADMIN));
  }, [dispatch]);

  return (
    <>
      <AdminHeader></AdminHeader>
      <Outlet />
    </>
  );
}
