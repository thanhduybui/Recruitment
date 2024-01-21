import { RightAsideLayout } from "@components/layouts";
import { MediumContainer } from "@components/ui";
import { CompanyInfo, ListJobs } from "@data/interface";
import {
  CompanyDescription,
  CompanyHeader,
  CompanyJobs,
  ContactInfo,
} from "@features/company";
import { useRouteLoaderData } from "react-router-dom";

export default function CompanyDetailPage() {
  const data = useRouteLoaderData("companyDetail");

  const { companyInfo, companyJobs } = data as {
    companyInfo: CompanyInfo;
    companyJobs: ListJobs;
  };

  console.log(companyInfo);

  const main = (
    <>
      <CompanyHeader
        companyLogo={companyInfo.image}
        companySize={companyInfo.scale}
        companyName={companyInfo.name}
        companyWebsite={companyInfo.webUrl}
      />
      <CompanyDescription description={companyInfo.description} />
      <CompanyJobs jobs={companyJobs} />
    </>
  );
  const aside = (
    <>
      <ContactInfo
        email={companyInfo.email}
        phone={companyInfo.phone}
        address={companyInfo.address}
      ></ContactInfo>
    </>
  );
  return (
    <MediumContainer>
      <RightAsideLayout main={main} aside={aside}></RightAsideLayout>
    </MediumContainer>
  );
}
