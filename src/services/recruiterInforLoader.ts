import api from "@utils/axios";
import { CompanyInfo } from "@data/interface";
import { getAccessToken } from "@utils/authUtils";
import { Option } from "@data/interface";
import { AxiosResponse } from "axios";

export default async function recruiterInfoLoader(): Promise<{
  companyInfo: CompanyInfo | null;
  fields: Option[];
  experienceRanges: Option[];
  workModes: Option[]; // Define the type for experienceRanges
  locations: Option[];
  majors: Option[];
} | null> {
  try {
    const res = await api.get("/companies/profile", {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });

    const [
      fieldRes,
      experienceRes,
      workModeRes,
      locationRes,
      majorRes,
    ]: AxiosResponse[] = await Promise.all([
      api.get("/fields"),
      api.get("/experience-ranges"),
      api.get("/work-modes"),
      api.get("/locations"),
      api.get("/majors"),
    ]);

    const fields = fieldRes.data?.data?.fields || [];
    const experienceRanges = experienceRes.data?.data?.experience_ranges || [];
    const workModes = workModeRes.data?.data?.work_modes || [];
    const locations = locationRes.data?.data?.locations || [];
    const majors = majorRes.data?.data?.majors || [];

    const companyInfo = res.data.data.company as CompanyInfo;
    return {
      companyInfo,
      fields,
      experienceRanges,
      workModes,
      locations,
      majors,
    };
  } catch (err) {
    return {
      companyInfo: null,
      fields: [],
      experienceRanges: [],
      workModes: [],
      locations: [],
      majors: [],
    };
  }
}
