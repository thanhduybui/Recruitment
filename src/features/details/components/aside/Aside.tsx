import { AsideChildContainer, GeneralInfo, KeyInfo } from "@features/details";
import { CompanyShortProfile } from "@features/details";

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
