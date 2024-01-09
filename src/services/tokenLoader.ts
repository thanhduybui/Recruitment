import { getAccessToken } from "@utils/authUtils";

export default function tokenLoader() {
  console.log(getAccessToken());
  return getAccessToken();
}
