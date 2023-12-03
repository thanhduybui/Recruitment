import { Button, Container } from "@mui/material";
import { DropDownListItem } from "@components/layouts/header";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white">
      <Container
        className="h-16"
        style={{ display: "flex", alignItems: "center" }}
        maxWidth="xl"
        fixed
      >
        <a className="text-3xl font-semibold text-primary-500">Jobhunt</a>
        <nav className="flex justify-between w-full">
          <ul className="flex gap-12 items-end ml-12">
            <DropDownListItem name="Việc làm" />
          </ul>
          <ul className="flex gap-4 ml-8">
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
      </Container>
    </header>
  );
};

export default Header;
