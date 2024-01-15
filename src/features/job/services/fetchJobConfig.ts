import { FilterState } from "@store/filterOption";

const requestConfig = (currentPage: number, jobFilter: FilterState) => {
  return {
    method: "GET",
    url: "http://localhost:8080/api/v1/jobs",
    params: {
      page: currentPage,
      ...jobFilter,
    },
  };
};

export default requestConfig;
