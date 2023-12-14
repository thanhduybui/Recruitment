import { Outlet } from "react-router-dom";
import { AdminHeader } from "./header";
export default function AdminRoot() {
  return (
    <>
      <AdminHeader></AdminHeader>
      <Outlet />
    </>
  );
}
