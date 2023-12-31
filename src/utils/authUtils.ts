import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

// Get the access token from cookies
export const getAccessToken = (): string | undefined => {
  return Cookies.get("access_token") || undefined; // Return undefined instead of an empty string
};

// Loader function to get the access token
export const tokenLoader = (): string | undefined => {
  return getAccessToken();
};

interface payload {
  sub: string;
  role: string;
  iat: number;
  exp: number;
}

export const getUserRole = (): string | undefined => {
  const token = getAccessToken();
  if (!token) {
    return undefined; // Return undefined if there's no token
  }

  try {
    const decodedToken = jwtDecode(token) as payload;
    return decodedToken.role;
  } catch (error) {
    console.error("Error decoding the token:", error);
    return undefined; // Return undefined in case of decoding errors
  }
};
