import { LeftLayoutContainer, LeftSidebarLayout } from "@components/layouts";
import { RecruiterSidebar } from "@features/recruiter/addJob";
import { RootState } from "@store";
import { useSelector } from "react-redux";
import { recruiterTabIndex } from "@data/constants";
import { AddJobMain } from "@features/recruiter/addJob";
import { RecruiterMyJob } from "@features/recruiter/myJob";

const { RECRUITER_ADD_JOB, RECRUITER_JOB } = recruiterTabIndex;

export default function AddJobPage() {
  const recruiterSidebarTab = useSelector(
    (state: RootState) => state.recruiterSidebar.recruiterTabIndex
  );

  const main = (
    <>
      {recruiterSidebarTab === RECRUITER_ADD_JOB && <AddJobMain />}
      {recruiterSidebarTab === RECRUITER_JOB && <RecruiterMyJob />}
    </>
  );

  return (
    <LeftLayoutContainer>
      <LeftSidebarLayout
        sidebar={<RecruiterSidebar />}
        main={main}
      ></LeftSidebarLayout>
    </LeftLayoutContainer>
  );
}
