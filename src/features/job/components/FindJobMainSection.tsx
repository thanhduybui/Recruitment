import { TimeOrder } from "@features/job";
import Pagination from "@mui/material/Pagination";
import { JobCardContainer } from "@features/job/";

export default function FindJobMainSection() {
  return (
    <>
      <TimeOrder />
      <JobCardContainer />
      <div className="py-20 flex items-center justify-center">
        <Pagination
          count={10}
          shape="rounded"
          color="primary"
          size="medium"
        ></Pagination>
      </div>
    </>
  );
}
