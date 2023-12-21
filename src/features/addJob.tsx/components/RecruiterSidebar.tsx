import Box from "@mui/material/Box";
import List from "@mui/material/List";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import ArticleIcon from "@mui/icons-material/Article";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { recruiterTabIndex } from "@data/constants";
import { SideBarItem } from "@components/sidebar";
import { useMediaQuery } from "@mui/material";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";

const {
  RECRUITER_HOME,
  RECRUITER_APPLICATION,
  RECRUITER_ADD_JOB,
  RECRUITER_CHANGE_AVATAR,
  RECRUITER_COMPANY,
  RECRUITER_JOB,
  RECRUITER_PROFILE,
} = recruiterTabIndex;

export default function RecruiterSidebar() {
  const isMdScreen = useMediaQuery("(min-width: 768px)");
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        marginTop: "2rem",
      }}
    >
      <List
        component="nav"
        aria-label="main mailbox folders"
        sx={{
          display: isMdScreen ? "auto" : "flex",
          flexDirection: isMdScreen ? "row" : "column",
        }}
      >
        <Link to="/find-job">
          <SideBarItem
            textContent="Về trang chủ"
            tabIndex={RECRUITER_HOME}
            icon={<HomeIcon sx={{ color: "#0572cc" }} />}
          ></SideBarItem>
        </Link>
        <SideBarItem
          textContent="Thêm việc mới"
          tabIndex={RECRUITER_ADD_JOB}
          icon={<ArticleIcon sx={{ color: "#0572cc" }} />}
        ></SideBarItem>
        <SideBarItem
          textContent="Việc đã đăng tuyển"
          tabIndex={RECRUITER_JOB}
          icon={<NewspaperIcon sx={{ color: "#0572cc" }} />}
        ></SideBarItem>
        <SideBarItem
          textContent="Đơn ứng tuyển"
          tabIndex={RECRUITER_APPLICATION}
          icon={<MarkAsUnreadIcon sx={{ color: "#0572cc" }} />}
        ></SideBarItem>
        <SideBarItem
          textContent="Thông tin cá nhân"
          tabIndex={RECRUITER_PROFILE}
          icon={<AccountBoxIcon sx={{ color: "#0572cc" }} />}
        ></SideBarItem>

        <SideBarItem
          textContent="Công ty"
          tabIndex={RECRUITER_COMPANY}
          icon={<MarkAsUnreadIcon sx={{ color: "#0572cc" }} />}
        ></SideBarItem>
        {!isMdScreen && (
          <SideBarItem
            textContent="Thay ảnh đại diện"
            icon={<CameraAltRoundedIcon sx={{ color: "#0572cc" }} />}
            tabIndex={RECRUITER_CHANGE_AVATAR}
          ></SideBarItem>
        )}
      </List>
    </Box>
  );
}
