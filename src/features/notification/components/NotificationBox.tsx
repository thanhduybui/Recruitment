import Divider from "@mui/material/Divider";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Notification } from "..";

type NotificationBoxProps = {
  id?: string;
  open: boolean;
  anchorEl?: HTMLButtonElement | null;
  handleClose?: () => void;
};

const notifications = [
  {
    id: 1,
    title: "Tìm thấy một công việc phù hợp với bạn",
    content:
      "Công ty abc đăng tuyển vị trí Fresher React JS, nhanh tay ứng tuyển nàoCông ty abc đăng tuyển vị trí Fresher React JS, nhanh tay ứng tuyển nào Công ty abc đăng tuyển vị trí Fresher React JS, nhanh tay ứng tuyển nào Công ty abc đăng tuyển vị trí Fresher React JS, nhanh tay ứng tuyển nào",
  },
  {
    id: 2,
    title: "Tìm thấy một công việc phù hợp với bạn",
    content:
      "Công ty abc đăng tuyển vị trí Fresher React JS, nhanh tay ứng tuyển nào",
  },
  {
    id: 3,
    title: "Tìm thấy một công việc phù hợp với bạn",
    content:
      "Công ty abc đăng tuyển vị trí Fresher React JS, nhanh tay ứng tuyển nào",
  },
  {
    id: 4,
    title: "Tìm thấy một công việc phù hợp với bạn",
    content:
      "Công ty abc đăng tuyển vị trí Fresher React JS, nhanh tay ứng tuyển nào",
  },
  {
    id: 5,
    title: "Tìm thấy một công việc phù hợp với bạn",
    content:
      "Công ty abc đăng tuyển vị trí Fresher React JS, nhanh tay ứng tuyển nào",
  },
  {
    id: 6,
    title: "Tìm thấy một công việc phù hợp với bạn",
    content:
      "Công ty abc đăng tuyển vị trí Fresher React JS, nhanh tay ứng tuyển nào",
  },
  {
    id: 7,
    title: "Tìm thấy một công việc phù hợp với bạn",
    content:
      "Công ty abc đăng tuyển vị trí Fresher React JS, nhanh tay ứng tuyển nào",
  },
  {
    id: 8,
    title: "Tìm thấy một công việc phù hợp với bạn",
    content:
      "Công ty abc đăng tuyển vị trí Fresher React JS, nhanh tay ứng tuyển nào",
  },
];

export default function NotificationBox(props: NotificationBoxProps) {
  return (
    <Popover
      id={props.id}
      open={props.open}
      anchorEl={props.anchorEl}
      onClose={props.handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <div className="min-w-[340px] max-w-[400px] flex flex-col gap-2 p-2">
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          Thông báo
        </Typography>
        <Divider />
        <div className="flex flex-col gap-2 max-h-[500px] lg:max-h-[700px] overflow-y-auto">
          {notifications.map((noti) => (
            <Notification
              key={noti.id}
              title={noti.title}
              content={noti.content}
            />
          ))}
        </div>
      </div>
    </Popover>
  );
}
