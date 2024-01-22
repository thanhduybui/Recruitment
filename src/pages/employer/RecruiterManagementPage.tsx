import { LeftLayoutContainer, LeftSidebarLayout } from "@components/layouts";

import { RootState } from "@store";
import { useSelector } from "react-redux";
import { recruiterTabIndex } from "@data/constants";
import { AddJobMain } from "@features/recruiter/addJob";
import { RecruiterMyJob } from "@features/recruiter/myJob";
import { RecruiterInfo } from "@features/recruiter/recuiterInfo";
import { VerifyAccount } from "@features/recruiter/approval";
import { SidebarItemType } from "@data/interface";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArticleIcon from "@mui/icons-material/Article";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { Sidebar } from "@components/sidebar";

const { RECRUITER_ADD_JOB, RECRUITER_JOB, RECRUITER_PROFILE, RECRUITER_PAPER } =
  recruiterTabIndex;

const recruiterSidebarItems: SidebarItemType[] = [
  {
    tabIndex: RECRUITER_PROFILE,
    content: "Thông tin cá nhân",
    icon: <AccountBoxIcon sx={{ color: "#0572cc" }} />,
  },
  {
    tabIndex: RECRUITER_ADD_JOB,
    content: "Thêm việc mới",
    icon: <ArticleIcon sx={{ color: "#0572cc" }} />,
  },
  {
    tabIndex: RECRUITER_JOB,
    content: "Việc đã đăng tuyển",
    icon: <NewspaperIcon sx={{ color: "#0572cc" }} />,
  },
  {
    tabIndex: RECRUITER_PAPER,
    content: "Giấy xác nhận",
    icon: <NewspaperIcon sx={{ color: "#0572cc" }} />,
  },
];

export default function AddJobPage() {
  const selectedTab = useSelector((state: RootState) => state.sidebar.tabIndex);

  const sidebar = <Sidebar items={recruiterSidebarItems} />;

  const main = (
    <>
      {selectedTab === RECRUITER_ADD_JOB && <AddJobMain />}
      {selectedTab === RECRUITER_JOB && <RecruiterMyJob />}
      {selectedTab === RECRUITER_PROFILE && <RecruiterInfo />}
      {selectedTab === RECRUITER_PAPER && <VerifyAccount />}
    </>
  );

  return (
    <>
      <LeftLayoutContainer>
        <LeftSidebarLayout sidebar={sidebar} main={main} />
      </LeftLayoutContainer>
    </>
  );
}
