import Typography from "@mui/material/Typography";
import { RecommendJobCard } from "@features/job";
import { useEffect } from "react";
import { getAccessToken } from "@utils/authUtils";
import requestConfig from "../services/fetchJobConfig";
import axios from "axios";
import { useState } from "react";
import { CandidateJob } from "@data/interface";

export default function AsideJob() {
  const [jobs, setJobs] = useState<CandidateJob[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(requestConfig(1, 4, getAccessToken()));
        const { listData } = response.data.data.jobs;

        console.log(listData);

        setJobs(listData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Typography
        sx={{ fontWeight: 600, fontSize: "1rem" }}
        className="text-gray-400"
        variant="h6"
        component="h6"
      >
        Có thể bạn quan tâm
      </Typography>
      <div className="flex flex-col gap-2 mt-4">
        {jobs?.map((job) => (
          <RecommendJobCard
            key={job.id}
            id={job.id}
            title={job.title}
            companyName={job.companyName}
            location={job.locationId}
            salary={job.salaryRange}
            logo={job.companyImage}
          />
        ))}
      </div>
    </>
  );
}
