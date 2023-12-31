import api from "@utils/axios";
import { AxiosError, AxiosResponse } from "axios";

export default async function positionLoader() {
  try {
    const res: AxiosResponse = await api.get("/positions");
    console.log(res.data);
    return res.data.data.positions;
  } catch (err) {
    const typeError = err as AxiosError;
    console.log(typeError.message);
    return null;
  }
}
