import { Breadcrumb, MediumContainer } from "@components/ui";
import { Box, Grid, Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { recruiterTabIndex } from "@data/constants";
import { useNavigate, useParams } from "react-router-dom";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useEffect, useState } from "react";
import {
  BlacklistModal,
  JobApplicationCard,
  JobApplicationModal,
} from "@features/recruiter/jobApplication";
import { Pagination } from "@mui/material";
import { RootState } from "@store";
import { setTabIndex } from "@store/sidebar";
import api from "@utils/axios";
import { getAccessToken } from "@utils/authUtils";
import { set } from "date-fns";
import { CandidateJob } from "@data/interface";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

type JobApplicationPageProps = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  phone: string;
  isBackListed: boolean;
};

export default function JobApplicationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [value, setValue] = useState(0);
  const [job, setJob] = useState<CandidateJob>();
  const [totalPages, setTotalPages] = useState(0);
  const isBlackListModalOpen = useSelector(
    (state: RootState) => state.modals.blacklistModal
  );
  const [applyStatus, setApplyStatus] = useState("PENDING");
  const [jobApplications, setJobApplications] = useState<
    JobApplicationPageProps[]
  >([]);
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

  useEffect(() => {
    const fetchJobApplications = async () => {
      try {
        const response = await api.get(
          `/job-applications?status=${applyStatus}&jobId=${id}`,
          {
            headers: {
              Authorization: `Bearer ${getAccessToken()}`,
            },
          }
        );

        const { totalPages } = response.data.data.jobApplications;
        setTotalPages(totalPages);

        setJobApplications(response.data.data.jobApplications.listData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobApplications();
  }, [id, applyStatus]);

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

  const renderJobApplications = jobApplications.map(
    (jobApplication: JobApplicationPageProps) => (
      <Grid key={jobApplication.id} item xs={6} md={4}>
        <JobApplicationCard
          id={jobApplication.id}
          name={jobApplication.name}
          email={jobApplication.email}
          phone={jobApplication.phone}
          avatar={jobApplication.avatar}
        />
      </Grid>
    )
  );
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
              onClick={() => setApplyStatus("PENDING")}
              label="Tất cả"
              {...a11yProps(0)}
              sx={{
                textTransform: "none",
                fontSize: "0.9rem",
              }}
            />
            <Tab
              onClick={() => setApplyStatus("SEEN")}
              label="Đã xem"
              {...a11yProps(1)}
              sx={{ textTransform: "none", fontSize: "0.9rem" }}
            />
            <Tab
              onClick={() => setApplyStatus("APPROVED")}
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
          {renderJobApplications}
        </Grid>
        <Box
          sx={{
            my: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Pagination count={totalPages} shape="rounded" color="primary" />
        </Box>
      </div>
    </MediumContainer>
  );
}
