import { Avatar, Box, Button, IconButton, Tooltip } from "@mui/material";
import Typography from "@mui/material/Typography";
import { InformationRow } from "..";
import FlagIcon from "@mui/icons-material/Flag";
import { useDispatch } from "react-redux";
import { openModal } from "@store/modal";
import { modalName } from "@data/constants";

type JobApplicationCardProps = {
  id?: string;
  avatar?: string;
  name?: string;
  phone?: string;
  email?: string;
  seen?: boolean;
  isBackListed?: boolean;
};

export default function JobApplicationCard(props: JobApplicationCardProps) {
  const { id, isBackListed, avatar, name, phone, email, seen } = props;
  const dispatch = useDispatch();

  const onOpenBlacklistDetailModal = (id?: string) => {
    console.log(id);
    dispatch(openModal({ modalName: modalName.BLACKLIST_MODAL }));
  };

  const onOpenJobApplicationtDetailModal = (id?: string) => {
    console.log(id);
    dispatch(openModal({ modalName: modalName.JOB_APPLICATION_MODAL }));
  };

  return (
    <div
      className={`p-4 flex flex-col items-center justify-center border-2  rounded-md first-letter ${
        seen
          ? "bg-gray-100 border-gray-150 text-gray-200"
          : "border-primary-500"
      }`}
    >
      <Avatar
        src={avatar}
        alt="user avatar"
        sx={{ width: "100px", height: "100px" }}
      ></Avatar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          mt: "0.7rem",
        }}
      >
        <Typography
          variant="body1"
          fontWeight={600}
          sx={{ alignSelf: "center" }}
        >
          {name}
        </Typography>
        <InformationRow label="Email" value={email}></InformationRow>
        <InformationRow label="SĐT" value={phone}></InformationRow>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          mt: "0.7rem",
        }}
      >
        {isBackListed && (
          <Tooltip title="Đã đưa vào danh sách đen">
            <IconButton
              size="small"
              color="error"
              sx={{ borderRadius: "8px" }}
              onClick={() => onOpenBlacklistDetailModal(id)}
            >
              <FlagIcon />
            </IconButton>
          </Tooltip>
        )}

        <Button
          onClick={() => onOpenJobApplicationtDetailModal(id)}
          variant="contained"
          color="primary"
          size="small"
          sx={{ textTransform: "none" }}
        >
          Xem hồ sơ
        </Button>
      </Box>
    </div>
  );
}
