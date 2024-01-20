import Chip from "@mui/material/Chip";

import { Buttons, LogoInformation } from "..";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import PunchClockRoundedIcon from "@mui/icons-material/PunchClockRounded";
import { TextHeading } from "@components/heading";

type JobDetailHeaderProps = {
  title?: string;
  location?: string;
  salary?: string;
  experience?: string;
  dueDate?: string;
  disabled?: boolean;
};
export default function JobDetailHeader(props: JobDetailHeaderProps) {
  return (
    <div className="job-detail-head p-6 flex flex-col gap-4 bg-white mr-4 rounded-md">
      <TextHeading title={props.title} />
      <div className="flex items-center justify-between">
        <LogoInformation
          label="Địa điểm:"
          content={props.location || "Hà Nội"}
          icon={<LocationOnIcon />}
        />
        <LogoInformation
          label="Mức lương:"
          content={props.salary || `20 - 25 triệu`}
          icon={<MonetizationOnRoundedIcon />}
        />
        <LogoInformation
          label="Kinh nghiệm:"
          content={props.experience}
          icon={<PunchClockRoundedIcon />}
        />
      </div>
      <div className="max-w-fit">
        <Chip
          label={`Thời gian ứng tuyển: ${props.dueDate}`}
          sx={{ borderRadius: "5px" }}
        />
      </div>
      <div className="flex items-center gap-2">
        <Buttons disabled={props.disabled} />
      </div>
    </div>
  );
}
