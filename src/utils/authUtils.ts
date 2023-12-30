import Cookies from "js-cookie";
import { redirect } from "react-router-dom";

export const getAccessToken = (): string => {
  return Cookies.get("access_token") || "";
};

export const checkAuthLoader = () => {
  const token = getAccessToken();

  if (!token) {
    return redirect("/login");
  }
  return token;
};

export const tokenLoader = (): string => {
  return getAccessToken();
};
