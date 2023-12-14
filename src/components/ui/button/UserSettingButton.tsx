import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

type UserSettingButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  open: boolean;
};
export default function UserSettingButton(props: UserSettingButtonProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Tooltip title="Cài đặt tài khoản">
        <IconButton
          onClick={props.handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={props.open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={props.open ? "true" : undefined}
        >
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU"></Avatar>
        </IconButton>
      </Tooltip>
    </Box>
  );
}
