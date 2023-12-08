import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import ListItemText from "@mui/material/ListItemText";
import ArticleIcon from "@mui/icons-material/Article";
import { useState } from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

export default function UserSettingList() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    console.log(event.target);
    setSelectedIndex(index);
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
              borderRight: selectedIndex === 4 ? "5px solid #0572cc" : "none",
            }}
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemIcon>
              <HomeIcon sx={{ color: "#0572cc" }} />
            </ListItemIcon>
            <ListItemText primary="Trang chủ" />
          </ListItemButton>
        </Link>
        <ListItemButton
          sx={{
            borderRight: selectedIndex === 0 ? "5px solid #0572cc" : "none",
          }}
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <AccountBoxIcon sx={{ color: "#0572cc" }} />
          </ListItemIcon>
          <ListItemText primary="Thông tin cá nhân" />
        </ListItemButton>
        <ListItemButton
          sx={{
            borderRight: selectedIndex === 1 ? "5px solid #0572cc" : "none",
          }}
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <ArticleIcon sx={{ color: "#0572cc" }} />
          </ListItemIcon>
          <ListItemText primary="Quản lí CV" />
        </ListItemButton>
        <ListItemButton
          sx={{
            borderRight: selectedIndex === 2 ? "5px solid #0572cc" : "none",
          }}
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <NewspaperIcon sx={{ color: "#0572cc" }} />
          </ListItemIcon>
          <ListItemText primary="Cài đặt profile CV" />
        </ListItemButton>
        <ListItemButton
          sx={{
            borderRight: selectedIndex === 3 ? "5px solid #0572cc" : "none",
          }}
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
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
