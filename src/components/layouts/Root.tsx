import { Header } from "./header";
import { Footer } from "./footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getTokenDuration } from "@utils/authUtils";
import { useRouteLoaderData } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logout } from "@store/auth";

export default function Root() {
  const token = useRouteLoaderData("root");
  const navigation = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      Cookies.remove("access_token");
      navigation("/login");
      dispatch(logout());
      return;
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      Cookies.remove("access_token");
      navigation("/login");
      dispatch(logout());
    }, tokenDuration);
  }, [token, navigation, dispatch]);

  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
}
