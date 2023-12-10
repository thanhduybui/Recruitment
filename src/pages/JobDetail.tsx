import Container from "@mui/material/Container";
import { JobDetailHeader } from "@features/details";
import { DetailHeader } from "@features/details";

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
          <div className="h-screen bg-white mt-4 mr-4 rounded-md p-4">
            <DetailHeader title="Chi tiết tin tuyển dụng" borderStart />
          </div>
        </div>
        <aside className="flex-none w-1/3 bg-gray-50">
          <div className="h-screen bg-white rounded-md"></div>
        </aside>
      </div>
    </Container>
  );
}
