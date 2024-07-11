import { MainSectionContainer } from "@components/ui";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { TabPanel, a11yProps } from "@components/tab";
import { useEffect, useState } from "react";
import { DeleteJobModal, EditJobModal } from "..";
import { useSelector } from "react-redux";
import { RootState } from "@store";

import { useRouteLoaderData } from "react-router-dom";
import { CandidateJob, CompanyInfo } from "@data/interface";
import { ToastContainer } from "react-toastify";
import { toastContainerOptions } from "@utils/toastifyUtils";
import { RecruiterJobCard } from "..";
import { Pagination } from "@mui/material";
import api from "@utils/axios";
import { convertToDDMMYYYY } from "@utils/datetimeUtil";

export default function RecruiterMyJob() {
  const isEditModalOpen = useSelector(
    (state: RootState) => state.modals.editJobModal
  );
  const data = useRouteLoaderData("recruiterInfo");
  const { companyInfo } = data as { companyInfo: CompanyInfo };
  const [value, setValue] = useState(0);
  const [renderJobs, setRenderJobs] = useState<CandidateJob[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteJobId, setDeleteJobId] = useState<string>("");
  const [reloading, setReloading] = useState(false);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let type: string = "ACTIVE";
        if (value === 1) {
          type = "EXPIRED";
        } else if (value === 2) {
          type = "HOT";
        }
        const response = await api.get(
          `/companies/${companyInfo.id}/jobs?type=${type}`
        );
        const { listData, totalPages } = response.data.data.jobs;
        setTotalPages(totalPages);
        setRenderJobs(listData);
      } catch (error) {
        console.error("Error fetching company jobs", error);
      }
    };

    fetchData();
  }, [value, reloading]);

  const handlePageChange = async (
    _: React.ChangeEvent<unknown>,
    page: number
  ) => {
    try {
      let type: string = "ACTIVE";
      if (value === 1) {
        type = "EXPIRED";
      } else if (value === 2) {
        type = "HOT";
      }
      const response = await api.get(
        `/companies/${companyInfo.id}/jobs?type=${type}&page=${page - 1}`
      );
      const { listData } = response.data.data.jobs;
      setRenderJobs(listData);
    } catch (error) {
      console.error("Error fetching company jobs", error);
    }
  };

  const handleDeleteJob = (jobId: string) => () => {
    setDeleteModalOpen(true);
    setDeleteJobId(jobId);
  };

  const handleCloseModal = () => {
    setDeleteModalOpen(false);
  };

  return (
    <>
      <ToastContainer {...toastContainerOptions} />
      <MainSectionContainer heading="Quản lý việc làm của bạn">
        <DeleteJobModal
          isDeleteModalOpen={deleteModalOpen}
          onClose={handleCloseModal}
          jobId={deleteJobId}
          onReload={() => setReloading(!reloading)}
        />
        {isEditModalOpen && <EditJobModal></EditJobModal>}
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
                label="Đã đóng"
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
            {renderJobs &&
              renderJobs.map((job) => (
                <RecruiterJobCard
                  key={job.id}
                  {...job}
                  dueDate={convertToDDMMYYYY(job.deadline + "")}
                  createdDate={convertToDDMMYYYY(job.createdAt + "")}
                  onDeleted={handleDeleteJob(job.id || "")}
                />
              ))}
            <Box sx={{ marginTop: "2rem", display: "flex" }}>
              <Pagination
                count={totalPages}
                shape="rounded"
                color="primary"
                size="medium"
                onChange={handlePageChange}
                sx={{ marginLeft: "auto" }}
              />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            {renderJobs &&
              renderJobs.map((job) => (
                <RecruiterJobCard
                  key={job.id}
                  {...job}
                  dueDate={convertToDDMMYYYY(job.deadline + "")}
                />
              ))}
            <Box sx={{ marginTop: "2rem", display: "flex" }}>
              <Pagination
                count={totalPages}
                shape="rounded"
                color="primary"
                size="medium"
                onChange={handlePageChange}
                sx={{ marginLeft: "auto" }}
              />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            {renderJobs &&
              renderJobs.map((job) => (
                <RecruiterJobCard
                  key={job.id}
                  {...job}
                  dueDate={convertToDDMMYYYY(job.deadline + "")}
                />
              ))}
            <Box sx={{ marginTop: "2rem", display: "flex" }}>
              <Pagination
                count={totalPages}
                shape="rounded"
                color="primary"
                size="medium"
                onChange={handlePageChange}
                sx={{ marginLeft: "auto" }}
              />
            </Box>
          </TabPanel>
        </Box>
      </MainSectionContainer>
    </>
  );
}
