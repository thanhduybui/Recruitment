import { HeaderList } from "@components/layouts/header";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Notifications from "@mui/icons-material/Notifications";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";
import { logout } from "@store";

export default function UserSetting() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    setAnchorEl(null);
    navigate("/login");
  };

  return (
    <HeaderList>
      <Tooltip title="Thông báo">
        <IconButton>
          <Notifications className="text-gray-400" />
        </IconButton>
      </Tooltip>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip title="Cài đặt tài khoản">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU"></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar sx={{ marginRight: "12px" }} />
          Bùi Thanh Duy
        </MenuItem>
        <Divider />
        <MenuItem sx={{ fontSize: "16px" }}>
          <ListItemIcon>
            <AccountCircleOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Thông tin cá nhân
        </MenuItem>
        <Divider />
        <MenuItem sx={{ fontSize: "16px" }}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Cài đặt gợi ý việc làm
        </MenuItem>
        <MenuItem sx={{ fontSize: "16px" }}>
          <ListItemIcon>
            <EmailOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Cài đặt nhận mail
        </MenuItem>
        <Divider />
        <MenuItem sx={{ fontSize: "16px" }}>
          <ListItemIcon>
            <LockOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Đổi mật khẩu
        </MenuItem>
        <MenuItem onClick={handleLogout} sx={{ fontSize: "16px" }}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Đăng xuất
        </MenuItem>
      </Menu>
    </HeaderList>
  );
}
