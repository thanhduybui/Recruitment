import { MainSectionContainer } from "@components/ui";
import HistoryCard from "./HistoryCard";
import { Box, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { getAccessToken } from "@utils/authUtils";
import api from "@utils/axios";

type Job = {
  title: string;
  salary: string;
  companyName: string;
  companyImage: string;
};

export type JobApplication = {
  job: Job;
  createdAt: string;
  status: string;
};

const statusHandler = (status: string) => {
  if (status === "PENDING") {
    return "Đang chờ";
  } else if (status === "REJECTED") {
    return "Đã xem";
  } else {
    return "Được chấp nhận";
  }
};

export default function ApplyJobHistory() {
  const [jobApplications, setJobApplications] = useState<JobApplication[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchJobApplications = async () => {
      try {
        const res = await api.get("/job-applications/candidate", {
          headers: { Authorization: "Bearer " + getAccessToken() },
        });

        console.log(res.data.data.job_applications.listData);
        setJobApplications(res.data.data.job_applications.listData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobApplications();
  }, [jobApplications]);

  return (
    <MainSectionContainer heading="Lịch sử ứng tuyển của bạn">
      <div className="mt-8 flex flex-col gap-4">
        {jobApplications.map((jobApplication) => (
          <HistoryCard
            name={jobApplication.job.title}
            companyName={jobApplication.job.companyName}
            salary={jobApplication.job.salary}
            applyTime={jobApplication.createdAt}
            status={statusHandler(jobApplication.status)}
            companyLogo={jobApplication.job.companyImage}
          />
        ))}
      </div>
      <Box sx={{ marginTop: "2rem", display: "flex" }}>
        <Pagination
          count={totalPages}
          shape="rounded"
          color="primary"
          size="medium"
          sx={{ marginLeft: "auto" }}
        />
      </Box>
    </MainSectionContainer>
  );
}
