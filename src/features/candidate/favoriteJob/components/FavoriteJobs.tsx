import { MainSectionContainer } from "@components/ui";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useEffect, useState } from "react";
import { a11yProps, TabPanel } from "@components/tab";
import { JobCard } from "@features/job";
import Pagination from "@mui/material/Pagination";
import { CandidateJob } from "@data/interface";
import api from "@utils/axios";
import { getAccessToken } from "@utils/authUtils";

export default function FavoriteJobs() {
  const [value, setValue] = useState(0);

  const [jobs, setJobs] = useState<CandidateJob[]>([]);

  console.log(jobs);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/favorite-jobs", {
          headers: { Authorization: `Bearer ${getAccessToken()}` },
        });
        console.log(res.data?.data?.favorite_jobs.listData);

        setJobs(res.data?.data?.favorite_jobs.listData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <MainSectionContainer heading="Việc làm đã thích">
      <Typography color="#444" marginBottom={`1rem`}>
        Danh sách{" "}
        <span className="text-lg text-primary-500 font-semibold">
          {jobs.length}
        </span>{" "}
        việc làm đã lưu
      </Typography>
      <Box sx={{ width: "100%", mt: "0.2rem", mb: "2rem" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="primary"
          >
            <Tab
              label="Đang tuyển"
              {...a11yProps(0)}
              sx={{
                textTransform: "none",
                fontSize: "0.9rem",
              }}
            />
            <Tab
              label="Hết hạn ứng tuyển"
              {...a11yProps(1)}
              sx={{ textTransform: "none", fontSize: "0.9rem" }}
            />
            <Tab
              label="Tuyển gấp"
              {...a11yProps(2)}
              sx={{ textTransform: "none", fontSize: "0.9rem" }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {jobs?.map((job) => {
            return (
              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                companyLogo={job.companyImage}
                companyName={job.companyName}
                locationId={job.locationId}
                salaryRange={job.salaryRange}
                deadline={job.restAppliedDays}
                isFavorite={true}
                isHot={job.isHot}
                isSaved={job.isFavorite || false}
              />
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Loading...
        </TabPanel>
        <TabPanel value={value} index={2}>
          Loading...
        </TabPanel>
        <Box sx={{ marginTop: "2rem", display: "flex" }}>
          <Pagination
            count={3}
            shape="rounded"
            color="primary"
            size="medium"
            sx={{ marginLeft: "auto" }}
          />
        </Box>
      </Box>
    </MainSectionContainer>
  );
}
