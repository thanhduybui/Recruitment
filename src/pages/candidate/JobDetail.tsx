import Container from "@mui/material/Container";
import { Buttons, JobDescription, JobDetailHeader } from "@features/jobDetails";
import { useRouteLoaderData } from "react-router-dom";
import { JobDetailType } from "@data/interface";
import { convertToDDMMYYYY } from "@utils/datetimeUtil";
import { useLocationName } from "@hooks";
import {
  AsideChildContainer,
  GeneralInfo,
  KeyInfo,
} from "@features/jobDetails";
import { CompanyShortProfile } from "@features/jobDetails";
import { ToastContainer } from "react-toastify";
import { toastContainerOptions } from "@utils/toastifyUtils";

export default function JobDetail() {
  const data = useRouteLoaderData("jobDetail");
  const job = data as JobDetailType;
  const locationName = useLocationName(job.locationId + "");

  const due =
    job.restAppliedDays > 0
      ? convertToDDMMYYYY(job.deadline)
      : "Hết hạn ứng tuyển";
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
      <ToastContainer {...toastContainerOptions} />
      <div className="flex">
        <div className="flex-1 w-2/3 flex flex-col bg-gray-50">
          <JobDetailHeader
            title={job.title}
            salary={job.salaryRange?.name || "Đang cập nhật"}
            experience={job.experienceRange?.name || "Không yêu cầu"}
            dueDate={due}
            location={locationName}
            disabled={job.restAppliedDays > 0}
          />
          <div className="bg-white mt-4 mr-4 rounded-md p-4">
            <JobDescription
              description={job.description}
              benefit={job.benefit}
              requirement={job.requirement}
              workingTime={job.workTime}
              workingLocation={job.workLocation}
            />
            <div className="w-3/4 flex items-center ml-auto gap-2 my-8">
              <Buttons disabled={job.restAppliedDays > 0} />
            </div>
          </div>
        </div>
        <aside className="flex-none w-1/3 bg-gray-50 text-gray-400">
          <div className="flex flex-col gap-4">
            <AsideChildContainer>
              <CompanyShortProfile
                avatarUrl={job.company?.image}
                companyName={job.company?.name}
                companySize={job.company?.scale}
                companyAddress={job.company?.address}
              />
            </AsideChildContainer>

            <AsideChildContainer>
              <GeneralInfo
                positionName={job.position?.name}
                candidateNumber={job.slots}
                workModeName={job.workMode?.name}
              />
            </AsideChildContainer>

            <AsideChildContainer>
              <KeyInfo />
            </AsideChildContainer>
          </div>
        </aside>
      </div>
    </Container>
  );
}
