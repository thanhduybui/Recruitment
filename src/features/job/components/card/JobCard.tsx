import Tooltip from "@mui/material/Tooltip";
import { IconButton, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CompanyLogo } from "@features/company";
import { CandidateJob } from "@data/interface";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { toast } from "react-toastify";
import { toastTifyOptions } from "@utils/toastifyUtils";
import { convertLocation } from "@features/job";
import FlashOnIcon from "@mui/icons-material/FlashOn";

export default function JobCard(props: CandidateJob) {
  const [onHover, setOnHover] = useState(false);
  const auth = useSelector((state: RootState) => state.auth);

  const [location, setLocation] = useState("");

  const onMouseOverHandler = () => {
    setOnHover(true);
  };

  const onMouseOutHandler = () => {
    setOnHover(false);
  };

  const saveFavoriteJobHandler = () => {
    if (!auth.isAuthenticated) {
      toast.warning(
        "Bạn cần đăng nhập để thực hiện chức năng này",
        toastTifyOptions
      );
    } else {
      toast.success("Chức năng này đang được phát triển", toastTifyOptions);
    }
  };

  useEffect(() => {
    const fetchLocation = async () => {
      const data = await convertLocation(props.location || "");
      setLocation(data);
    };
    fetchLocation();
  }, [props.location]);

  return (
    <div
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
      className="relative job-card w-full flex gap-4 py-3 px-4 bg-primary-50 border hover:cursor-pointer hover:border-primary-400 border-gray-100 rounded-md"
    >
      {props.isHot && (
        <Tooltip title="Việc làm gấp" placement="right">
          <FlashOnIcon
            sx={{
              position: "absolute",
              top: "-0.5rem",
              left: "1rem",
              color: "#fab005",
            }}
          />
        </Tooltip>
      )}

      <CompanyLogo src={props.companyLogo} />
      <div className="text-gray-500 font-medium flex flex-col gap-6 w-1/2">
        <div>
          <Tooltip title={props.title} placement="top">
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontSize: "1rem",
                fontWeight: 600,
                transition: "color 0.3s",
                color: onHover ? "#0581e6" : "#444444",
              }}
            >
              {props.title}
            </Typography>
          </Tooltip>

          <Tooltip title={props.companyName} placement="top">
            <Typography
              variant="subtitle2"
              component="span"
              sx={{
                color: "#7c7c7c",
                fontSize: "0.8rem",
              }}
            >
              {props.companyName}
            </Typography>
          </Tooltip>
        </div>
        <div className="flex gap-1">
          <Tooltip title={location} placement="bottom">
            <Typography
              variant="subtitle2"
              component="span"
              sx={{
                padding: "0.2rem 0.5rem",
                borderRadius: "5px",
                backgroundColor: "#cccccc",
                color: "#444444",
                fontSize: "0.7rem",
                fontWeight: 300,
              }}
            >
              {location}
            </Typography>
          </Tooltip>

          <Tooltip
            title={`${
              props.deadline === null
                ? `Đang tuyển`
                : props.deadline && props.deadline < 0
                ? "Hết hạn ứng tuyển"
                : `Còn ${props.deadline} ngày để ứng tuyển`
            }`}
            placement="bottom"
          >
            <Typography
              variant="subtitle2"
              component="span"
              sx={{
                padding: "0.2rem 0.5rem",
                borderRadius: "5px",
                backgroundColor: "#cccccc",
                color: "#444444",
                fontSize: "0.7rem",
                fontWeight: 300,
              }}
            >
              {`${
                props.deadline === null
                  ? `Đang tuyển`
                  : props.deadline && props.deadline < 0
                  ? "Hết hạn ứng tuyển"
                  : `Còn ${props.deadline} ngày để ứng tuyển`
              }`}
            </Typography>
          </Tooltip>
        </div>
      </div>
      <div className="more-info flex flex-col justify-between items-end ml-auto">
        <div>
          <Typography
            variant="subtitle2"
            component="span"
            sx={{
              color: "#0581e6",
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            {props.salaryRange}
          </Typography>
        </div>

        <div className="flex items-center gap-1">
          <Link to="/job-detail">
            <Button
              color="primary"
              size="small"
              variant="contained"
              sx={{ textTransform: "none" }}
            >
              Ứng tuyển
            </Button>
          </Link>
          <Tooltip title="Lưu tin" placement="top">
            <IconButton
              sx={{ borderRadius: "8px" }}
              itemID={props.id}
              onClick={saveFavoriteJobHandler}
            >
              {props.isFavorite && <FavoriteRoundedIcon color="primary" />}
              {!props.isFavorite && <FavoriteBorderIcon color="primary" />}
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
