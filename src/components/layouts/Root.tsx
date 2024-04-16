import { Header } from "./header";
import { Footer } from "./footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getTokenDuration } from "@utils/authUtils";
import { useRouteLoaderData } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logout } from "@store/auth";
import useUserProfile from "@hooks/useUserProfile";
import { setUserAvatar } from "@store/avatar";
import { ModalConfirmDelete } from "@components/ui/modal";

export default function Root() {
  const token = useRouteLoaderData("root");
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const userProfile = useUserProfile();

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

    dispatch(
      setUserAvatar({ url: userProfile?.avatar, alt: userProfile?.fullName })
    );
  }, [token, navigation, dispatch, userProfile]);

  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
}
