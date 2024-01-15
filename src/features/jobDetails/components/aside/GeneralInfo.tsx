import { LogoInformation } from "@features/jobDetails";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import WcRoundedIcon from "@mui/icons-material/WcRounded";
import { TextHeading } from "@components/heading";

export default function GeneralInfo() {
  return (
    <>
      <TextHeading title="Thông tin chung" />
      <div className="flex flex-col gap-6 mt-6">
        <LogoInformation
          label="Cấp bậc"
          content="Nhân viên"
          icon={<StarsRoundedIcon />}
        />
        <LogoInformation
          label="Kinh nghiệm"
          content="4 năm"
          icon={<WorkHistoryRoundedIcon />}
        />
        <LogoInformation
          label="Số lượng tuyển"
          content="1 người"
          icon={<PeopleAltRoundedIcon />}
        />
        <LogoInformation
          label="Hình thức làm việc"
          content="Toàn thời gian"
          icon={<BusinessCenterRoundedIcon />}
        />
        <LogoInformation
          label="Giới tính"
          content="Không yêu cầu"
          icon={<WcRoundedIcon />}
        />
      </div>
    </>
  );
}
