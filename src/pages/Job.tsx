import { Header } from "@components/layouts/header";
import { Banner, Filter } from "@features/filter";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import { JobCard, RecommendedJobCard } from "@features/job";
import Typography from "@mui/material/Typography";

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
              <div className="job-card w-2/3 flex-1 overflow-y-auto">
                <div className="max-h-[calc(100vh-200px)] overflow-y-auto flex flex-col gap-3 scrollbar-hidden">
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
              </div>
              <aside className="w-1/3 px-4 flex-none sticky top-0">
                <Typography
                  sx={{ fontWeight: 600, fontSize: "1.1rem" }}
                  className="text-gray-400"
                  variant="h6"
                  component="h6"
                >
                  Có thể bạn quan tâm
                </Typography>
                <div className="flex flex-col rounded-md border-2 border-primary-500">
                  <RecommendedJobCard />
                  <Divider />
                  <RecommendedJobCard />
                  <Divider />
                  <RecommendedJobCard />
                  <Divider />
                  <RecommendedJobCard />
                  <Divider />
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
