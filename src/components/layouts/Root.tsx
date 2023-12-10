import { Header } from "./header";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
}
