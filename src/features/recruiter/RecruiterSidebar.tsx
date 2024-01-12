import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ArticleIcon from "@mui/icons-material/Article";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { recruiterTabIndex } from "@data/constants";
import { SideBarItem } from "@components/sidebar";
import { useMediaQuery } from "@mui/material";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";

const {
  RECRUITER_ADD_JOB,
  RECRUITER_CHANGE_AVATAR,
  RECRUITER_JOB,
  RECRUITER_PROFILE,
  RECRUITER_PAPER,
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
        <SideBarItem
          textContent="Thông tin cá nhân"
          tabIndex={RECRUITER_PROFILE}
          icon={<AccountBoxIcon sx={{ color: "#0572cc" }} />}
          isRecruiter
        ></SideBarItem>

        <SideBarItem
          textContent="Thêm việc mới"
          tabIndex={RECRUITER_ADD_JOB}
          icon={<ArticleIcon sx={{ color: "#0572cc" }} />}
          isRecruiter
        ></SideBarItem>
        <SideBarItem
          textContent="Việc đã đăng tuyển"
          tabIndex={RECRUITER_JOB}
          icon={<NewspaperIcon sx={{ color: "#0572cc" }} />}
          isRecruiter
        ></SideBarItem>
        <SideBarItem
          textContent="Giấy xác nhận"
          tabIndex={RECRUITER_PAPER}
          icon={<NewspaperIcon sx={{ color: "#0572cc" }} />}
          isRecruiter
        ></SideBarItem>
        {!isMdScreen && (
          <SideBarItem
            textContent="Thay ảnh đại diện"
            icon={<CameraAltRoundedIcon sx={{ color: "#0572cc" }} />}
            tabIndex={RECRUITER_CHANGE_AVATAR}
            isRecruiter
          ></SideBarItem>
        )}
      </List>
    </Box>
  );
}
