import { Header } from "@components/layouts/header";
import { Banner, BasicFilter } from "@features/filter";
import Container from "@mui/material/Container";

export default function Job() {
  return (
    <>
      <Header />
      <Container>
        <div className="w-full m-auto">
          <Banner />
          <form className="">
            <BasicFilter />
          </form>
        </div>
      </Container>
    </>
  );
}
