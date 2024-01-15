import {
  AsideChildContainer,
  GeneralInfo,
  KeyInfo,
} from "@features/jobDetails";
import { CompanyShortProfile } from "@features/jobDetails";

export default function Aside() {
  return (
    <div className="flex flex-col gap-4">
      <AsideChildContainer>
        <CompanyShortProfile />
      </AsideChildContainer>

      <AsideChildContainer>
        <GeneralInfo />
      </AsideChildContainer>

      <AsideChildContainer>
        <KeyInfo />
      </AsideChildContainer>
    </div>
  );
}
