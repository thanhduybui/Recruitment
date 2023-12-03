import { Button, Container } from "@mui/material";
import HeaderListItem from "./HeaderListItem";

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
            <HeaderListItem name="Việc làm" />
            <HeaderListItem name="Doanh nghiệp" />
            <HeaderListItem name="Bài viết" />
          </ul>
          <ul className="flex gap-4 ml-8">
            <Button variant="outlined" color="primary">
              Đăng nhập
            </Button>
            <Button variant="contained" color="primary">
              Đăng ký
            </Button>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
