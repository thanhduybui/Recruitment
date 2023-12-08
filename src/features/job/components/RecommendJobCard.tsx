import Typography from "@mui/material/Typography";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { RecommendJobDetail } from "..";
import Divider from "@mui/material/Divider";
import { Tooltip } from "@mui/material";

export default function RecommendedJobCard() {
  return (
    <div className="flex flex-col px-4 py-2">
      <div className="mb-5">
        <Tooltip
          title="Fresher React Developer tại Thành phố Hồ Chí Minh"
          placement="top"
        >
          <Typography
            className="text-gray-400"
            variant="subtitle1"
            component="p"
            sx={{ fontSize: "0.8rem", fontWeight: "600" }}
          >
            Fresher React Developer
          </Typography>
        </Tooltip>
      </div>

      <div className="flex justify-between items-center">
        <RecommendJobDetail
          text="Thoả thuận"
          tooltip="Mức lương"
          icon={<MonetizationOnIcon color="primary" fontSize="small" />}
        />
        <RecommendJobDetail
          text="Hồ Chí Minh"
          tooltip="Hồ Chí Minh: Quận 2"
          icon={<LocationOnIcon color="primary" fontSize="small" />}
        />
      </div>
      <Divider sx={{ marginTop: "0.5rem" }} />
    </div>
  );
}
