import { LeftLayoutContainer, LeftSidebarLayout } from "@components/layouts";
import { RecruiterSidebar } from "@features/addJob.tsx";

export default function AddJobPage() {
  return (
    <LeftLayoutContainer>
      <LeftSidebarLayout
        sidebar={<RecruiterSidebar />}
        main={<></>}
      ></LeftSidebarLayout>
    </LeftLayoutContainer>
  );
}
