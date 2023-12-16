import IconButton from "@mui/material/IconButton";

import Tooltip from "@mui/material/Tooltip";

import Notifications from "@mui/icons-material/Notifications";

const notiBtnStyles = {
  backgroundColor: "#f0f0f0",
  "&hover": {
    backgroundColor: "#f7f7f7",
  },
};
export default function NotiButton() {
  return (
    <Tooltip title="Thông báo">
      <IconButton sx={notiBtnStyles}>
        <Notifications className="text-primary-500" />
      </IconButton>
    </Tooltip>
  );
}
