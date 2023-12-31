import { HeaderWrapper } from ".";
import { LogoButton } from "@components/ui/button";
import { UserSettingMenu } from "@features/candidate/setting";
import { HeaderList } from ".";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { HeaderNavItem } from "@components/layouts/header";
import { NavLink } from "react-router-dom";
import HeaderNavWrapper from "./HeaderNavWrapper";

export default function AdminHeader() {
  const [showNav, setShowNav] = useState(false);
  return (
    <HeaderWrapper>
      <LogoButton />
      <HeaderNavWrapper showNav={showNav}>
        <HeaderList>
          <NavLink
            to="/admin/"
            end
            className={({ isActive }) =>
              isActive ? "text-primary-500 bg-gray-100" : ""
            }
          >
            <HeaderNavItem name="Dashboard" />
          </NavLink>
          <NavLink
            to="/admin/jobs"
            className={({ isActive }) =>
              isActive ? "text-primary-500 bg-gray-100" : ""
            }
          >
            <HeaderNavItem name="Việc làm" />
          </NavLink>
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              isActive ? "text-primary-500 bg-gray-100" : ""
            }
          >
            <HeaderNavItem name="Người dùng" />
          </NavLink>
          <NavLink
            to="/admin/others"
            className={({ isActive }) =>
              isActive ? "text-primary-500 bg-gray-100" : ""
            }
          >
            <HeaderNavItem name="Khác" />
          </NavLink>
        </HeaderList>

        <UserSettingMenu />
      </HeaderNavWrapper>
      <div className="lg:hidden ml-2 self-end z-20">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setShowNav(!showNav)}
          sx={{ borderRadius: "8px" }}
        >
          {showNav ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>
    </HeaderWrapper>
  );
}
