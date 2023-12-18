import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
type NotificationProps = {
  title: string;
  content: string;
  link?: string;
  seen?: boolean;
};
export default function Notification({ title, content }: NotificationProps) {
  return (
    <div className="flex flex-col gap-1 p-2 rounded-md border border-gray-150">
      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <Typography variant="caption" className="line-clamp-2">
        {content}
      </Typography>
      <div>
        <Link to="/job-detail">
          <span className="transition duration-75 text-sm text-primary-500 border-b-2 border-transparent hover:border-primary-500">
            Xem chi tiết
          </span>
        </Link>
      </div>
    </div>
  );
}
