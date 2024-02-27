import { MainSectionContainer } from "@components/ui";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { RecruiterPanelContent, TabPanel, a11yProps } from "@components/tab";
import { useState } from "react";
import { EditJobModal } from "..";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { DeleteModal } from "@components/ui/modal";
import { useCompanyJob } from "@hooks";
import { useRouteLoaderData } from "react-router-dom";
import { CompanyInfo } from "@data/interface";
import { ToastContainer } from "react-toastify";
import { toastContainerOptions } from "@utils/toastifyUtils";

export default function RecruiterMyJob() {
  const isEditModalOpen = useSelector(
    (state: RootState) => state.modals.editJobModal
  );
  const data = useRouteLoaderData("recruiterInfo");
  const { companyInfo } = data as { companyInfo: CompanyInfo };
  const [value, setValue] = useState(0);
  const { jobs, totalPages } = useCompanyJob(companyInfo.id + "", value);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <ToastContainer {...toastContainerOptions} />
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
            <RecruiterPanelContent
              jobs={jobs}
              totalPages={totalPages}
            ></RecruiterPanelContent>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <RecruiterPanelContent
              jobs={jobs}
              totalPages={totalPages}
            ></RecruiterPanelContent>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <RecruiterPanelContent
              jobs={jobs}
              totalPages={totalPages}
            ></RecruiterPanelContent>
          </TabPanel>
        </Box>
      </MainSectionContainer>
    </>
  );
}
