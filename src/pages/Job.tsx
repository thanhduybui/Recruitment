import { Header } from "@components/layouts/header";
import { Banner, Filter } from "@features/filter";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import { JobCard } from "@features/job";

export default function Job() {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <Container style={{ backgroundColor: "#ffffff", padding: 0 }}>
          <Banner />
          <div className="px-5">
            <div className="w-full m-auto mb-8">
              <form className="">
                <Filter />
              </form>
            </div>
            <Divider />
            <div className="flex mt-4">
              <div className="w-2/3 flex flex-col gap-3 flex-1">
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
              </div>
              <div className="w-1/3 flex-none">Ben tay</div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
