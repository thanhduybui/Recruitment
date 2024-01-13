import api from "@utils/axios";
import { AxiosError, AxiosResponse } from "axios";

export default async function positionLoader() {
  try {
    const res: AxiosResponse = await api.get("/positions");
    return res.data.data.positions;
  } catch (err) {
    const typeError = err as AxiosError;
    console.log(typeError.message);
    throw new Error(typeError.message);
  }
}
