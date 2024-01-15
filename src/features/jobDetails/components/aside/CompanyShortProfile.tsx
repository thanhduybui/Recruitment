import { LogoInformation } from "@features/jobDetails";
import { CompanyLogo } from "@features/company";
import { Typography } from "@mui/material";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";

export default function CompanyShortProfile() {
  return (
    <>
      <div className="flex gap-2">
        <CompanyLogo />
        <Typography
          variant="subtitle2"
          sx={{
            textTransform: "uppercase",
          }}
        >
          Công ty Cổ phần Công nghệ FPT
        </Typography>
      </div>
      <div className="flex flex-col gap-2 mt-5">
        <LogoInformation
          small
          label="Quy mô: "
          icon={<PeopleAltRoundedIcon sx={{ width: "1rem", height: "1rem" }} />}
          content="500+ nhân viên"
        />
        <LogoInformation
          small
          label="Địa chỉ: "
          icon={<FmdGoodRoundedIcon sx={{ width: "1rem", height: "1rem" }} />}
          content="Số 15, đường Trường Thọ, Thanh Xuân, Hà Nội"
        />
      </div>
    </>
  );
}
