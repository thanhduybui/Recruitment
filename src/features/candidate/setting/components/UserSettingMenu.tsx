import { HeaderList } from "@components/layouts/header";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "@store/auth";
import { NotiButton, UserSettingButton } from "@components/ui/button";
import { SettingMenuItem } from "@components/menu";
import { RootState } from "@store";
import { Roles } from "@data/constants";

export default function UserSettingMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector((state: RootState) => state.role.role);

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
      <NotiButton />
      <UserSettingButton handleClick={handleClick} open={open} />
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link to="/user-setting">
          <SettingMenuItem
            text="Quản lý hồ sơ cá nhân"
            icon={
              <AccountCircleOutlinedIcon fontSize="small" color="primary" />
            }
          />
        </Link>
        <Divider />
        {role === Roles.CANDIDATE && (
          <>
            <SettingMenuItem
              icon={<Settings fontSize="small" color="primary" />}
              text="Cài đặt gợi ý việc làm"
            />

            <SettingMenuItem
              icon={<EmailOutlinedIcon fontSize="small" color="primary" />}
              text="Cài đặt nhận mail"
            />
          </>
        )}
        <Divider />
        <SettingMenuItem
          icon={<LockOutlinedIcon fontSize="small" color="primary" />}
          text="Đổi mật khẩu"
        />
        <SettingMenuItem
          onLogout={handleLogout}
          icon={<Logout fontSize="small" color="primary" />}
          text="Đăng xuất"
        />
      </Menu>
    </HeaderList>
  );
}
