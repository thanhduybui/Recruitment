import Button from "@mui/material/Button";
import { DropDownListItem, HeaderList } from "@components/layouts/header";
import { Link } from "react-router-dom";
import { UserSettingMenu } from "@features/setting";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { RootState } from "@store";
import { useState } from "react";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";

const companyData = ["Doanh nghiệp nổi bật", "Tuyển dụng nhiều nhất"];
const jobData = ["Tìm việc", "Việc làm phù hợp"];
const cvCategories = ["Tạo CV mới", "CV của bạn", "Hướng dẫn tạo CV"];

export default function HeaderNav() {
  const isLogin = useSelector((state: RootState) => state.auth.isAuthenticated);
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <nav
        className={`absolute ${
          showNav ? "" : "hidden lg:flex"
        } top-0 z-10 lg:z-0 bg-primary-100 lg:bg-white 
      left-0 lg:relative gap-4 flex flex-col pt-20 lg:pt-0 lg:flex-row  
    lg:justify-between w-full h-screen lg:h-16`}
      >
        <HeaderList>
          <Link to="/find-job">
            <DropDownListItem name="Việc làm" data={jobData} />
          </Link>
          <DropDownListItem name="Doanh nghiệp" data={companyData} />
          <DropDownListItem name="Quản lý CV" data={cvCategories} />
        </HeaderList>

        {!isLogin && (
          <HeaderList>
            <Link to="/login">
              <Button variant="outlined" color="primary">
                Đăng nhập
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="contained" color="primary">
                Đăng ký
              </Button>
            </Link>
          </HeaderList>
        )}
        {isLogin && <UserSettingMenu />}
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
    </>
  );
}
