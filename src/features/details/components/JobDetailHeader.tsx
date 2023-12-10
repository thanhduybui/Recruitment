import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { DetailHeader, LogoInformation } from "..";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import PunchClockRoundedIcon from "@mui/icons-material/PunchClockRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

const styles = {
  textTransform: "none",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.4rem",
};

export default function JobDetailHeader() {
  return (
    <div className="job-detail-head p-6 flex flex-col gap-4 bg-white mr-4 rounded-md">
      <DetailHeader title="Frontend Developer" />
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
        <div className="w-2/3">
          <Button variant="contained" color="primary" sx={styles}>
            <SendRoundedIcon />
            Ứng tuyển ngay
          </Button>
        </div>
        <div className="w-1/3">
          <Button variant="outlined" color="primary" sx={styles}>
            <FavoriteBorderRoundedIcon />
            Yêu thích
          </Button>
        </div>
      </div>
    </div>
  );
}
