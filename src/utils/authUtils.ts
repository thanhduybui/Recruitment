import Cookies from "js-cookie";
import { LoaderFunction, redirect } from "react-router-dom";

export const getAccessToken = (): string | undefined => {
  return Cookies.get("access_token");
};

export const checkAuthLoader: LoaderFunction = async () => {
  const token = getAccessToken(); // Assuming getAccessToken is a function that retrieves the access token from the request

  if (!token) {
    // Redirect to the login page if the token is missing
    return redirect("/login");
  }
  return token;
};
