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

export default function RecruiterHeader() {
  const [showNav, setShowNav] = useState(false);
  return (
    <HeaderWrapper>
      <LogoButton />
      <HeaderNavWrapper showNav={showNav}>
        <HeaderList>
          <NavLink
            to="/recruiter/find-job"
            className={({ isActive }) =>
              isActive ? "text-primary-500 bg-gray-100" : ""
            }
            end
          >
            <HeaderNavItem name="Việc làm" />
          </NavLink>
          <NavLink
            to="/recruiter/setting"
            className={({ isActive }) =>
              isActive ? "text-primary-500 bg-gray-100" : ""
            }
          >
            <HeaderNavItem name="Quản lý" />
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
