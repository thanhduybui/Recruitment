import Box from "@mui/material/Box";
import List from "@mui/material/List";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import ArticleIcon from "@mui/icons-material/Article";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { TabIndex } from "@data/constants";
import { SideBarItem } from "@components/sidebar";
import { useMediaQuery } from "@mui/material";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";

const {
  CHANGE_AVATAR,
  USER_PROFILE,
  CV,
  CV_PROFILE,
  APPLICATION,
  FAVORITE_JOB,
} = TabIndex;

export default function SideBar() {
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
          tabIndex={USER_PROFILE}
          icon={<AccountBoxIcon sx={{ color: "#0572cc" }} />}
        ></SideBarItem>
        {!isMdScreen && (
          <SideBarItem
            textContent="Thay ảnh đại diện"
            icon={<CameraAltRoundedIcon sx={{ color: "#0572cc" }} />}
            tabIndex={CHANGE_AVATAR}
          ></SideBarItem>
        )}
        <SideBarItem
          textContent="Công việc yêu thích"
          tabIndex={FAVORITE_JOB}
          icon={<FavoriteIcon sx={{ color: "#0572cc" }} />}
        ></SideBarItem>
        <SideBarItem
          textContent="Quản lý CV"
          tabIndex={CV}
          icon={<ArticleIcon sx={{ color: "#0572cc" }} />}
        ></SideBarItem>
        <SideBarItem
          textContent="Cài đặt CV profile"
          tabIndex={CV_PROFILE}
          icon={<NewspaperIcon sx={{ color: "#0572cc" }} />}
        ></SideBarItem>
        <SideBarItem
          textContent="Lịch sử ứng tuyển"
          tabIndex={APPLICATION}
          icon={<MarkAsUnreadIcon sx={{ color: "#0572cc" }} />}
        ></SideBarItem>
      </List>
    </Box>
  );
}
