import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import { RootState } from "@store";
import { useSelector } from "react-redux";
import { AxiosRequestConfig } from "axios";
import axios from "axios";

type CandidateJob = {
  id?: string;
  title?: string;
  companyImage?: string;
  companyName?: string;
  locationId?: string;
  salaryRange?: string;
  restAppliedDays?: number;
  isFavorite?: boolean;
  status?: string;
  isHot?: boolean;
};

export default function JobCardContainer() {
  const jobFilter = useSelector((state: RootState) => state.jobFilter);
  const [jobs, setJobs] = useState<CandidateJob[]>([]);

  useEffect(() => {
    const requestConfig: AxiosRequestConfig = {
      method: "GET",
      url: "http://localhost:8080/api/v1/jobs",
      params: {
        ...jobFilter,
      },
    };
    axios(requestConfig)
      .then((res) => {
        console.log(res.data.data.jobs.listData);
        setJobs(res.data.data.jobs.listData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [jobFilter]);
  return (
    <div className="transiton duration-75 overflow-y-auto flex flex-col gap-3 scrollbar-hidden bg-white">
      {jobs?.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          companyLogo={job.companyImage}
          companyName={job.companyName}
          location={job.locationId}
          salaryRange={job.salaryRange}
          deadline={job.restAppliedDays}
          status={job.status}
          isFavorite={false}
          isHot={job.isHot}
        ></JobCard>
      ))}
    </div>
  );
}
