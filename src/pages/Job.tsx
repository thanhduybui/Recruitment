import { Header } from "@components/layouts/header";
import { Banner } from "@features/filter";
import Container from "@mui/material/Container";

export default function Job() {
  return (
    <>
      <Header />
      <Container>
        <div className="w-3/4 m-auto">
          <Banner />
          <div className="filter">
            <form className="flex gap-2 items-center py-4">
              <input
                className="w-1/4 text-gray-300 text-sm border-2 border-gray-200 rounded-sm outline-none focus:border-primary-600 px-4 py-2 placeholder:text-gray-200 placeholder:text-sm"
                placeholder="Tìm công việc, vị trí ứng tuyển..."
              ></input>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}
