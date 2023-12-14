import IconButton from "@mui/material/IconButton";

import Tooltip from "@mui/material/Tooltip";

import Notifications from "@mui/icons-material/Notifications";

export default function NotiButton() {
  return (
    <Tooltip title="Thông báo">
      <IconButton>
        <Notifications className="text-gray-400" />
      </IconButton>
    </Tooltip>
  );
}
