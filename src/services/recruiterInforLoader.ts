import api from "@utils/axios";
import { CompanyInfo } from "@data/interface";
import { getAccessToken } from "@utils/authUtils";
import { Option } from "@data/interface";
import { AxiosResponse } from "axios";

export default async function recruiterInfoLoader(): Promise<{
  companyInfo: CompanyInfo | null;
  positions: Option[];
  salaryRanges: Option[];
  fields: Option[];
  experienceRanges: Option[];
  workModes: Option[]; // Define the type for experienceRanges
} | null> {
  try {
    const res = await api.get("/companies/profile", {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });

    const [
      positionRes,
      salaryRes,
      fieldRes,
      experienceRes,
      workModeRes,
    ]: AxiosResponse[] = await Promise.all([
      api.get("/positions"),
      api.get("/salary-ranges"),
      api.get("/fields"),
      api.get("/experience-ranges"),
      api.get("/work-modes"),
    ]);

    const positions = positionRes.data?.data?.positions || [];
    const salaryRanges = salaryRes.data?.data?.salary_ranges || [];
    const fields = fieldRes.data?.data?.fields || [];
    const experienceRanges = experienceRes.data?.data?.experience_ranges || [];
    const workModes = workModeRes.data?.data?.work_modes || [];

    const companyInfo = res.data.data.company as CompanyInfo;
    return {
      companyInfo,
      positions,
      salaryRanges,
      fields,
      experienceRanges,
      workModes,
    };
  } catch (err) {
    return {
      companyInfo: null,
      positions: [],
      salaryRanges: [],
      fields: [],
      experienceRanges: [],
      workModes: [],
    };
  }
}
