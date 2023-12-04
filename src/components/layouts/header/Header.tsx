import { Button, Container, IconButton } from "@mui/material";
import { DropDownListItem } from "@components/layouts/header";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const companyData = ["Doanh nghiệp nôi bật", "Tuyển dụng nhiều nhất"];
const jobData = ["Việc làm mới nhất", "Việc làm phù hợp"];

const Header = () => {
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
        <Link to="/">
          <a className="text-3xl font-semibold text-primary-500">Jobhunt</a>
        </Link>

        <nav
          className="absolute top-0 left-0 lg:relative gap-4 flex flex-col pt-20 lg:pt-0 lg:flex-row  
        lg:justify-between w-full h-screen lg:h-16"
        >
          <ul className="flex flex-col lg:flex-row items-center lg:ml-12">
            <DropDownListItem name="Việc làm" data={jobData} />
            <DropDownListItem name="Doanh nghiệp" data={companyData} />
            <DropDownListItem name="Bài viết" />
          </ul>
          <ul className="flex flex-col lg:flex-row items-center gap-4 lg:ml-8">
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
          </ul>
        </nav>

        <div className="lg:hidden ml-2 self-end">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ borderRadius: "8px" }}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </Container>
    </header>
  );
};
export default Header;
