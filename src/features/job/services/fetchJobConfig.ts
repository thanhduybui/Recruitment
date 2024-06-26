import { FilterState } from "@store/filterOption";

const requestConfig = (
  currentPage: number,
  jobFilter: FilterState,
  authToken
) => {
  const headers = authToken ? { Authorization: `Bearer ${authToken}` } : {};
  return {
    method: "GET",
    url: "http://localhost:8080/api/v1/jobs",
    params: {
      page: currentPage,
      salary: jobFilter.salaryRange,
      field: jobFilter.field,
      position: jobFilter.position,
      location: jobFilter.location,
      experience: jobFilter.experienceRange,
      keyword: jobFilter.searchKeyword,
      hot: jobFilter.isHot,
      major: jobFilter.major,
      workMode: jobFilter.workMode,
    },
    headers: headers,
  };
};

export default requestConfig;
