import { UserInfo } from "@components/form";
import { MainSectionContainer } from "@components/ui";
import { ToastContainer } from "react-toastify";
import { CompanyInformation } from "..";
import useUserProfile from "@hooks/useUserProfile";

export default function RecruiterInfo() {
  const profile = useUserProfile();

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <MainSectionContainer heading="Thông tin cá nhân">
        <div className="w-4/5 lg:w-3/4 m-auto">
          <UserInfo profile={profile} />
        </div>
        <CompanyInformation></CompanyInformation>
      </MainSectionContainer>
    </>
  );
}
