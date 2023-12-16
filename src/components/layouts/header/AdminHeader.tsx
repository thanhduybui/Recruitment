import { DropDownListItem, HeaderWrapper } from ".";
import { LogoButton } from "@components/ui/button";
import { UserSettingMenu } from "@features/setting";
import { HeaderList } from ".";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function AdminHeader() {
  const [showNav, setShowNav] = useState(false);
  return (
    <HeaderWrapper>
      <LogoButton />
      <nav
        className={`absolute ${
          showNav ? "" : "hidden lg:flex"
        } top-0 z-10 lg:z-0 bg-primary-100 lg:bg-white 
      left-0 lg:relative gap-4 flex flex-col pt-20 lg:pt-0 lg:flex-row  
    lg:justify-between w-full h-screen lg:h-16`}
      >
        <HeaderList>
          <DropDownListItem name="Việc làm" />
          <DropDownListItem name="Ứng viên" />
          <DropDownListItem name="Nhà tuyển dụng" />
        </HeaderList>

        <UserSettingMenu />
      </nav>
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
