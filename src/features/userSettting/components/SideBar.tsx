import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import ListItemText from "@mui/material/ListItemText";
import ArticleIcon from "@mui/icons-material/Article";
import { RootState } from "@store";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setTabIndex } from "@store/sidebar";
import { useDispatch } from "react-redux";
import { TabIndex } from "@data/constants";

const { HOME, USER_PROFILE, CV, CV_PROFILE, APPLICATION } = TabIndex;

export default function SideBar() {
  const selectedIndex = useSelector(
    (state: RootState) => state.sidebar.tabIndex
  );

  const dispatcher = useDispatch();

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    console.log(event.target);
    dispatcher(setTabIndex(index));
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        marginTop: "2rem",
      }}
    >
      <List component="nav" aria-label="main mailbox folders">
        <Link to="/find-job">
          <ListItemButton
            sx={{
              borderRight:
                selectedIndex === HOME ? "5px solid #0572cc" : "none",
            }}
            selected={selectedIndex === HOME}
            onClick={(event) => handleListItemClick(event, HOME)}
          >
            <ListItemIcon>
              <HomeIcon sx={{ color: "#0572cc" }} />
            </ListItemIcon>
            <ListItemText primary="Trang chủ" />
          </ListItemButton>
        </Link>
        <ListItemButton
          sx={{
            borderRight:
              selectedIndex === USER_PROFILE ? "5px solid #0572cc" : "none",
          }}
          selected={selectedIndex === USER_PROFILE}
          onClick={(event) => handleListItemClick(event, USER_PROFILE)}
        >
          <ListItemIcon>
            <AccountBoxIcon sx={{ color: "#0572cc" }} />
          </ListItemIcon>
          <ListItemText primary="Thông tin cá nhân" />
        </ListItemButton>
        <ListItemButton
          sx={{
            borderRight: selectedIndex === CV ? "5px solid #0572cc" : "none",
          }}
          selected={selectedIndex === CV}
          onClick={(event) => handleListItemClick(event, CV)}
        >
          <ListItemIcon>
            <ArticleIcon sx={{ color: "#0572cc" }} />
          </ListItemIcon>
          <ListItemText primary="Quản lí CV" />
        </ListItemButton>
        <ListItemButton
          sx={{
            borderRight:
              selectedIndex === CV_PROFILE ? "5px solid #0572cc" : "none",
          }}
          selected={selectedIndex === CV_PROFILE}
          onClick={(event) => handleListItemClick(event, CV_PROFILE)}
        >
          <ListItemIcon>
            <NewspaperIcon sx={{ color: "#0572cc" }} />
          </ListItemIcon>
          <ListItemText primary="Cài đặt profile CV" />
        </ListItemButton>
        <ListItemButton
          sx={{
            borderRight:
              selectedIndex === APPLICATION ? "5px solid #0572cc" : "none",
          }}
          selected={selectedIndex === APPLICATION}
          onClick={(event) => handleListItemClick(event, APPLICATION)}
        >
          <ListItemIcon>
            <MarkAsUnreadIcon sx={{ color: "#0572cc" }} />
          </ListItemIcon>
          <ListItemText primary="Quản lý ứng tuyển" />
        </ListItemButton>
      </List>
    </Box>
  );
}
