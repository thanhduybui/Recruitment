import { Breadcrumb, MediumContainer } from "@components/ui";
import { Box, Grid, Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { recruiterTabIndex } from "@data/constants";
import { useNavigate } from "react-router-dom";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import {
  BlacklistModal,
  JobApplicationCard,
  JobApplicationModal,
} from "@features/recruiter/jobApplication";
import { Pagination } from "@mui/material";
import { RootState } from "@store";
import { setTabIndex } from "@store/sidebar";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function JobApplicationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const isBlackListModalOpen = useSelector(
    (state: RootState) => state.modals.blacklistModal
  );
  const isJobApplicationModalOpen = useSelector(
    (state: RootState) => state.modals.jobApplicationModal
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setValue(newValue);
  };

  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    dispatch(setTabIndex(recruiterTabIndex.RECRUITER_JOB));
    navigate(event.currentTarget.getAttribute("href")!);
  }

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/recruiter/setting"
      onClick={handleClick}
    >
      Đơn ứng tuyển
    </Link>,
    <Typography key="2" color="text.primary">
      Đơn ứng tuyển Fresher Java
    </Typography>,
  ];

  const jobApplications = Array.from({ length: 10 }, (_, index) => (
    <Grid key={index} item xs={6} md={4}>
      <JobApplicationCard
        seen={true}
        name="Bùi Thanh Duy"
        email="dtb1742002@gmail.com"
        phone="0383314133"
        isBackListed
        avatar="https://hips.hearstapps.com/hmg-prod/images/russian-blue-royalty-free-image-1658451809.jpg"
      />
    </Grid>
  ));

  return (
    <MediumContainer>
      {isBlackListModalOpen && <BlacklistModal></BlacklistModal>}
      {isJobApplicationModalOpen && <JobApplicationModal></JobApplicationModal>}
      <div className="className p-4 bg-white rounded-md">
        <Breadcrumb breadcrumps={breadcrumbs} />
        <Box
          sx={{
            mt: "0.7rem",
          }}
        >
          <Typography
            variant="h6"
            sx={{ display: "inline", mr: "0.4rem" }}
            fontWeight={600}
          >
            Đơn ứng tuyển Java fresher
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight={600}
            color={`#0581e6`}
            sx={{ display: "inline" }}
          >
            #2334-2234-2234-2233
          </Typography>
        </Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider", mt: "1.2rem" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="primary"
          >
            <Tab
              label="Đã xem"
              {...a11yProps(0)}
              sx={{
                textTransform: "none",
                fontSize: "0.9rem",
              }}
            />
            <Tab
              label="Chưa xem"
              {...a11yProps(1)}
              sx={{ textTransform: "none", fontSize: "0.9rem" }}
            />
            <Tab
              label="Phù hợp nhất"
              {...a11yProps(2)}
              sx={{ textTransform: "none", fontSize: "0.9rem" }}
            />
          </Tabs>
        </Box>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          mt={`2rem`}
        >
          {jobApplications}
        </Grid>
        <Box
          sx={{
            my: "3rem",

            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          {" "}
          <Pagination count={10} shape="rounded" color="primary"></Pagination>
        </Box>
      </div>
    </MediumContainer>
  );
}
