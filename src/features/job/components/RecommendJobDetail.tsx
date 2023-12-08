import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

type RecommendJobDetailProps = {
  tooltip: string;
  text: string;
  icon: React.ReactNode;
};

export default function RecommendJobDetail(props: RecommendJobDetailProps) {
  return (
    <Tooltip title={props.tooltip} placement="top">
      <div className="flex items-center">
        {props.icon}
        <Typography
          className="text-primary-500"
          variant="subtitle2"
          component="span"
          sx={{ fontSize: "0.7rem" }}
        >
          {props.text}
        </Typography>
      </div>
    </Tooltip>
  );
}
