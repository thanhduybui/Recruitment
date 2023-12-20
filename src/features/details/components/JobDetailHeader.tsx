import Chip from "@mui/material/Chip";

import { Buttons, LogoInformation } from "..";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import PunchClockRoundedIcon from "@mui/icons-material/PunchClockRounded";
import { TextHeading } from "@components/heading";

export default function JobDetailHeader() {
  return (
    <div className="job-detail-head p-6 flex flex-col gap-4 bg-white mr-4 rounded-md">
      <TextHeading title="Frontend Developer" />
      <div className="flex items-center justify-between">
        <LogoInformation
          label="Địa điểm:"
          content="Hồ chí Minh"
          icon={<LocationOnIcon />}
        />
        <LogoInformation
          label="Mức lương:"
          content="20 - 25 triệu"
          icon={<MonetizationOnRoundedIcon />}
        />
        <LogoInformation
          label="Kinh nghiệm:"
          content="3 năm"
          icon={<PunchClockRoundedIcon />}
        />
      </div>
      <div className="max-w-fit">
        <Chip
          label="Thời gian ứng tuyển: 12/12/2023"
          sx={{ borderRadius: "5px" }}
        />
      </div>
      <div className="flex items-center gap-2">
        <Buttons />
      </div>
    </div>
  );
}
