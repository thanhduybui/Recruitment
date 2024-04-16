import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import { CompanyLogo } from "@features/company";
import { Typography } from "@mui/material";
import { useState } from "react";

type HistoryCardProps = {
  name?: string;
  companyName?: string;
  applyTime?: string;
  status?: string;
  salary?: string;
  companyLogo?: string;
};

export default function HistoryCard(props: HistoryCardProps) {
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
      className="relative job-card w-full flex gap-4 py-3 px-4 bg-primary-50 border hover:cursor-pointer hover:border-primary-400 border-gray-100 rounded-md"
    >
      <CompanyLogo
        src={
          props.companyLogo ||
          "https://cdn-icons-png.flaticon.com/512/25/25231.png"
        }
      />
      <div className="text-gray-500 font-medium flex flex-col gap-6 w-1/2">
        <div className="flex flex-col">
          <Tooltip title={"Java fresher"} placement="top">
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
              {props.name || "Java fresher"}
            </Typography>
          </Tooltip>

          <Tooltip title={"Tên công ty"} placement="top">
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

          <Tooltip title={"Thời gian ứng tuyển"} placement="top">
            <Typography
              variant="subtitle2"
              component="span"
              sx={{
                color: "#7c7c7c",
                fontSize: "0.8rem",
              }}
            >
              Thời gian ứng tuyển: {props.applyTime}
            </Typography>
          </Tooltip>
        </div>
        <div className="flex gap-1">
          <Tooltip title="Trạng thái" placement="bottom">
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
              Trạng thái: {props.status}
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

        <Button
          color="primary"
          size="small"
          variant="contained"
          sx={{ textTransform: "none" }}
        >
          Xem CV
        </Button>
      </div>
    </div>
  );
}
