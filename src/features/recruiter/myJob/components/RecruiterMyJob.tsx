import { MainSectionContainer } from "@components/ui";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import TabPanel from "./TabPanel";
import { EditJobModal, RecruiterJobCard } from "..";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { DeleteModal } from "@components/ui/modal";
import { useCompanyJob } from "@hooks";
import { useRouteLoaderData } from "react-router-dom";
import { CompanyInfo } from "@data/interface";
import { ToastContainer } from "react-toastify";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function RecruiterMyJob() {
  const isEditModalOpen = useSelector(
    (state: RootState) => state.modals.editJobModal
  );
  const data = useRouteLoaderData("recruiterInfo");
  const { companyInfo } = data as { companyInfo: CompanyInfo };
  const { jobs } = useCompanyJob(companyInfo.id + "");
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <MainSectionContainer heading="Quản lý việc làm của bạn">
        <DeleteModal></DeleteModal>
        {isEditModalOpen && <EditJobModal></EditJobModal>}
        <Box sx={{ width: "100%", mt: "0.2rem", mb: "2rem", height: "100vh" }}>
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
            {jobs.map((job) => (
              <RecruiterJobCard key={job.id} {...job} />
            ))}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {jobs.map((job) => (
              <RecruiterJobCard key={job.id} {...job} />
            ))}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {jobs.map((job) => (
              <RecruiterJobCard key={job.id} {...job} />
            ))}
          </TabPanel>
        </Box>
      </MainSectionContainer>
    </>
  );
}
