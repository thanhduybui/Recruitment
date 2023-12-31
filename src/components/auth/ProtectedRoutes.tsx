import { RootState } from "@store";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

type ProtectedRoutesProps = {
  allowRole: string;
};

export default function ProtectedRoutes({ allowRole }: ProtectedRoutesProps) {
  const auth = useSelector((state: RootState) => state.auth);

  const { isAuthenticated, role } = auth;
  return isAuthenticated && role === allowRole ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}
