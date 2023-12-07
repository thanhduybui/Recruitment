import Typography from "@mui/material/Typography";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Tooltip from "@mui/material/Tooltip";

export default function RecommendedJobCard() {
  return (
    <div className="flex flex-col p-4">
      <div className="mb-5">
        <Typography className="text-gray-400" variant="subtitle1" component="p">
          Fresher React Developer
        </Typography>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <MonetizationOnIcon color="primary" />
          <Typography
            className="text-primary-500"
            variant="subtitle2"
            component="span"
          >
            Thoả thuận
          </Typography>
        </div>

        <Tooltip title="Hồ Chí Minh: Quận 2" placement="top">
          <div className="flex items-center">
            <LocationOnIcon color="primary" />
            <Typography
              className="text-primary-500"
              variant="subtitle2"
              component="span"
            >
              Hồ Chí Minh
            </Typography>
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
