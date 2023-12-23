import { RecruiterHeader } from "./header";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";

export default function RecruiterRoot() {
  return (
    <>
      <RecruiterHeader></RecruiterHeader>
      <Outlet />
      <Footer />
    </>
  );
}
