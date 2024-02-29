import { Option } from "@data/interface";
import api from "@utils/axios";
import { AxiosResponse } from "axios";

export default async function findJobPageLoader(): Promise<{
  positions: Option[];
  salaryRanges: Option[];
  locations: Option[];
  fields: Option[];
  experienceRanges: Option[];
  workModes: Option[]; // Define the type for experienceRanges
} | null> {
  try {
    const [
      positionRes,
      salaryRes,
      locationRes,
      fieldRes,
      experienceRes,
      workModeRes,
    ]: AxiosResponse[] = await Promise.all([
      api.get("/positions"),
      api.get("/salary-ranges"),
      api.get("/locations"),
      api.get("/fields"),
      api.get("/experience-ranges"),
      api.get("/work-modes"),
    ]);

    const positions = positionRes.data?.data?.positions || [];
    const salaryRanges = salaryRes.data?.data?.salary_ranges || [];
    const locations = locationRes.data?.data?.locations || [];
    const fields = fieldRes.data?.data?.fields || [];
    const experienceRanges = experienceRes.data?.data?.experience_ranges || [];
    const workModes = workModeRes.data?.data?.work_modes || [];

    return {
      positions,
      salaryRanges,
      locations,
      fields,
      experienceRanges,
      workModes,
    };
  } catch (err) {
    console.error("Error fetching data:", err);
    return {
      positions: [],
      salaryRanges: [],
      locations: [],
      fields: [],
      experienceRanges: [],
      workModes: [],
    };
  }
}
