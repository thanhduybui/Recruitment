import { Option } from "@data/interface";
import api from "@utils/axios";
import { AxiosResponse } from "axios";

export default async function findJobPageLoader(): Promise<{
  locations: Option[];
  fields: Option[];
  experienceRanges: Option[];
  workModes: Option[]; // Define the type for experienceRanges
  majors: Option[];
} | null> {
  try {
    const [
      locationRes,
      fieldRes,
      experienceRes,
      workModeRes,
      majorRes,
    ]: AxiosResponse[] = await Promise.all([
      api.get("/locations"),
      api.get("/fields"),
      api.get("/experience-ranges"),
      api.get("/work-modes"),
      api.get("majors"),
    ]);

    const locations = locationRes.data?.data?.locations || [];
    const fields = fieldRes.data?.data?.fields || [];
    const experienceRanges = experienceRes.data?.data?.experience_ranges || [];
    const workModes = workModeRes.data?.data?.work_modes || [];
    const majors = majorRes.data?.data?.majors || [];

    return {
      locations,
      fields,
      experienceRanges,
      workModes,
      majors,
    };
  } catch (err) {
    return {
      locations: [],
      fields: [],
      experienceRanges: [],
      workModes: [],
      majors: [],
    };
  }
}
