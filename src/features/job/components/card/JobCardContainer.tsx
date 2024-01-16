import { JobCard } from "@features/job";
import { useEffect, useState } from "react";
import { RootState } from "@store";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setTotalFoundJobs } from "@store/paginationData";
import { requestJobConfig } from "@features/job";
import Pagination from "@mui/material/Pagination";
import { CandidateJob } from "@data/interface";

export default function JobCardContainer() {
  const jobFilter = useSelector((state: RootState) => state.jobFilter);
  const [jobs, setJobs] = useState<CandidateJob[]>([]);
  const dispatch = useDispatch();
  const pagination = useSelector(
    (state: RootState) => state.paginationData.paginationData
  );

  useEffect(() => {
    console.log(jobFilter);
    const fetchData = async () => {
      try {
        const response = await axios(requestJobConfig(0, jobFilter));
        const { listData, totalItems, totalPages } = response.data.data.jobs;

        setJobs(listData);
        dispatch(setTotalFoundJobs({ totalItems, totalPages }));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [jobFilter, dispatch]);

  const changePageHandler = async (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    try {
      const response = await axios(requestJobConfig(value - 1, jobFilter));
      const { listData } = response.data.data.jobs;

      setJobs(listData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="transiton duration-75 overflow-y-auto flex flex-col gap-3 scrollbar-hidden bg-white py-2">
        {jobs?.map((job) => (
          <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            companyLogo={job.companyImage}
            companyName={job.companyName}
            locationId={job.locationId}
            salaryRange={job.salaryRange}
            deadline={job.restAppliedDays}
            status={job.status}
            isFavorite={false}
            isHot={job.isHot}
            isSaved={false}
          />
        ))}
      </div>
      <div className="py-20 flex items-center justify-center">
        <Pagination
          count={pagination.totalPages}
          shape="rounded"
          onChange={changePageHandler}
          color="primary"
          size="medium"
        />
      </div>
    </>
  );
}
