import { MediumContainer } from "@components/ui";
import { RecruiterRegisterForm } from "@features/recruiter/authentication";

export default function EmployerRegisterPage() {
  return (
    <MediumContainer>
      <div className="bg-white  w-full flex rounded-md">
        <RecruiterRegisterForm></RecruiterRegisterForm>
        <div className="w-5/12 rounded-r-md bg-gradient-to-br from-primary-600 to-primary-200"></div>
      </div>
    </MediumContainer>
  );
}
