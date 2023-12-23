import { MainSectionContainer } from "@components/ui";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import TabPanel from "./TabPanel";
import { RecruiterJobCard } from "..";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { DeleteModal } from "@components/ui/modal";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function RecruiterMyJob() {
  const isDeleteModalOpen = useSelector(
    (state: RootState) => state.modals.deleteModal
  );
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  console.log(isDeleteModalOpen);

  return (
    <MainSectionContainer heading="Quản lý việc làm của bạn">
      <DeleteModal></DeleteModal>
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
          {Array.from({ length: 5 }, (_, index) => (
            <RecruiterJobCard key={index} id={index + ""} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {Array.from({ length: 3 }, (_, index) => (
            <RecruiterJobCard key={index} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {Array.from({ length: 2 }, (_, index) => (
            <RecruiterJobCard key={index} />
          ))}
        </TabPanel>
      </Box>
    </MainSectionContainer>
  );
}