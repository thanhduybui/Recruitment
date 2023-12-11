import Tooltip from "@mui/material/Tooltip";
import { IconButton, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CompanyLogo } from "@components/ui";

type JobCardProps = {
  jobTitle?: string;
  companyName?: string;
  location?: string;
  salary?: string;
  deadline?: string;
  favorite?: boolean;
};

export default function JobCard(props: JobCardProps) {
  const [onHover, setOnHover] = useState(false);

  const onMouseOverHandler = () => {
    setOnHover(true);
  };

  const onMouseOutHandler = () => {
    setOnHover(false);
  };

  return (
    <div
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
      className="job-card w-full flex gap-4 py-3 px-4 bg-primary-50 border hover:cursor-pointer hover:border-primary-400 border-gray-100 rounded-md"
    >
      <CompanyLogo />
      <div className="text-gray-500 font-medium flex flex-col gap-6 w-1/2">
        <div>
          <Tooltip title={props.jobTitle} placement="top">
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
              {props.jobTitle}
            </Typography>
          </Tooltip>

          <Tooltip title="Công ty Cổ phần Công nghệ FPT" placement="top">
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
          <Tooltip title="Hồ Chí Minh" placement="bottom">
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
              {props.location}
            </Typography>
          </Tooltip>

          <Tooltip title="Còn 5 ngày để ứng tuyển" placement="bottom">
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
              Còn {props.deadline} ngày để ứng tuyển
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
            {props.salary}
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
            <IconButton sx={{ borderRadius: "8px" }}>
              {props.favorite && <FavoriteRoundedIcon color="primary" />}
              {!props.favorite && <FavoriteBorderIcon color="primary" />}
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
