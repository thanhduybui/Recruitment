import Container from "@mui/material/Container";
import {
  Aside,
  Buttons,
  JobDescription,
  JobDetailHeader,
} from "@features/jobDetails";

export default function JobDetail() {
  return (
    <Container
      style={{
        backgroundColor: "#ffffff",
        marginBottom: "2.4rem",
        marginTop: "0.6rem",
        position: "relative",
        padding: 0,
      }}
    >
      <div className="flex">
        <div className="flex-1 w-2/3 flex flex-col bg-gray-50">
          <JobDetailHeader />
          <div className="bg-white mt-4 mr-4 rounded-md p-4">
            <JobDescription />
            <div className="w-3/4 flex items-center ml-auto gap-2 my-8">
              <Buttons />
            </div>
          </div>
        </div>
        <aside className="flex-none w-1/3 bg-gray-50 text-gray-400">
          <Aside />
        </aside>
      </div>
    </Container>
  );
}
