import { SettingHeader } from "@features/setting";
import { CvLib } from "@features/setting";

export default function CvManage() {
  return (
    <div className="p-4">
      <SettingHeader />
      <div className="m-auto p-5">
        <CvLib />
      </div>
    </div>
  );
}
