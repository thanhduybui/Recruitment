import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { DropDownListItem, HeaderList } from "@components/layouts/header";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { UserSetting } from "@features/userSettting";
import { useState } from "react";

const companyData = ["Doanh nghiệp nôi bật", "Tuyển dụng nhiều nhất"];
const jobData = ["Việc làm mới nhất", "Việc làm phù hợp"];
const cvCategories = ["Tạo CV mới", "CV của bạn", "Hướng dẫn tạo CV"];

const Header = () => {
  const isLogin = useSelector((state: RootState) => state.auth.isAuthenticated);
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        maxWidth="xl"
        fixed
      >
        <Link to="/home">
          <a className="text-3xl font-semibold text-primary-500">Jobhunt</a>
        </Link>

        <nav
          className={`absolute ${
            showNav ? "" : "hidden lg:flex"
          } top-0 z-10 lg:z-0 bg-primary-100 lg:bg-white 
          left-0 lg:relative gap-4 flex flex-col pt-20 lg:pt-0 lg:flex-row  
        lg:justify-between w-full h-screen lg:h-16`}
        >
          <HeaderList>
            <DropDownListItem name="Việc làm" data={jobData} />
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
          {isLogin && <UserSetting />}
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
      </Container>
    </header>
  );
};
export default Header;
