import { UserInfo } from "@components/form";
import { MainSectionContainer } from "@components/ui";
import { ToastContainer } from "react-toastify";
import { CompanyInformation } from "..";
import useUserProfile from "@hooks/useUserProfile";
import { toastContainerOptions } from "@utils/toastifyUtils";

export default function RecruiterInfo() {
  const profile = useUserProfile();

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ToastContainer {...toastContainerOptions} />
      <MainSectionContainer heading="Thông tin cá nhân">
        <div className="w-4/5 lg:w-3/4 m-auto">
          <UserInfo profile={profile} />
        </div>
        <CompanyInformation></CompanyInformation>
      </MainSectionContainer>
    </>
  );
}
