import { CvLib } from "@features/setting";
import { MainSectionContainer } from "@components/ui";

export default function CvManage() {
  return (
    <MainSectionContainer heading="Quản lý CV">
      <div className="m-auto p-5">
        <CvLib />
      </div>
    </MainSectionContainer>
  );
}
