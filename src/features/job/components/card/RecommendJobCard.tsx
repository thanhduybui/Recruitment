import Typography from "@mui/material/Typography";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { RecommendJobDetail } from "../..";
import { IconButton, Tooltip } from "@mui/material";
import { CompanyLogo } from "@features/company";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function RecommendedJobCard() {
  return (
    <div className="flex flex-col p-2 pl-3 border border-gray-100 rounded-md">
      <div className="mb-5 flex gap-2">
        <CompanyLogo sm />
        <div className="font-semibold">
          <Tooltip
            title="Fresher React Developer tại Thành phố Hồ Chí Minh"
            placement="top"
          >
            <Typography
              className="text-gray-400"
              variant="subtitle1"
              component="p"
              sx={{ fontSize: "0.8rem", fontWeight: 600 }}
            >
              Fresher React Developer
            </Typography>
          </Tooltip>
          <Tooltip title="Công ty Cổ phần Công nghệ FPT" placement="top">
            <Typography
              className="text-gray-300"
              variant="subtitle1"
              component="p"
              sx={{ fontSize: "0.7rem" }}
            >
              Công ty Cổ phần Công nghệ FPT
            </Typography>
          </Tooltip>
        </div>
      </div>

      <div className="flex items-center gap-3 text-gray-200">
        <RecommendJobDetail
          text="Thoả thuận"
          tooltip="Mức lương"
          icon={<MonetizationOnIcon fontSize="small" />}
        />
        <RecommendJobDetail
          text="Hồ Chí Minh"
          tooltip="Hồ Chí Minh: Quận 2"
          icon={<LocationOnIcon fontSize="small" />}
        />
        <IconButton size="small" sx={{ marginLeft: "auto" }}>
          <FavoriteBorderOutlinedIcon color="primary" fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
}
