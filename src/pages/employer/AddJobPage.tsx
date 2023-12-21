import { LeftLayoutContainer, LeftSidebarLayout } from "@components/layouts";
import { AddJobMain, RecruiterSidebar } from "@features/addJob.tsx";

export default function AddJobPage() {
  return (
    <LeftLayoutContainer>
      <LeftSidebarLayout
        sidebar={<RecruiterSidebar />}
        main={<AddJobMain></AddJobMain>}
      ></LeftSidebarLayout>
    </LeftLayoutContainer>
  );
}
