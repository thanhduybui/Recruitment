import { RightAsideLayout } from "@components/layouts";
import { MediumContainer } from "@components/ui";
import {
  CompanyDescription,
  CompanyHeader,
  CompanyJobs,
  ContactInfo,
} from "@features/company";

export default function CompanyDetailPage() {
  const main = (
    <>
      <CompanyHeader />
      <CompanyDescription></CompanyDescription>
      <CompanyJobs></CompanyJobs>
    </>
  );
  const aside = (
    <>
      <ContactInfo></ContactInfo>
    </>
  );
  return (
    <MediumContainer>
      <RightAsideLayout main={main} aside={aside}></RightAsideLayout>
    </MediumContainer>
  );
}
