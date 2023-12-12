import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import { useDispatch } from "react-redux";
import { openModal } from "@store/modal";
import { modalName } from "@data/constants";
const { AVATAR_MODAL } = modalName;
import { useMediaQuery } from "@mui/material";

export default function AvatarModal() {
  const dispatch = useDispatch();
  const isMdScreen = useMediaQuery("(min-width: 768px)");

  const onClickHandler = () => {
    dispatch(openModal({ modalName: AVATAR_MODAL }));
  };

  return (
    <>
      {isMdScreen && (
        <div className="pt-5 flex flex-col gap-2 items-center justify-center">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Tooltip title="Chỉnh sửa ảnh đại diện" placement="bottom">
                <IconButton
                  onClick={onClickHandler}
                  size="small"
                  sx={{
                    border: "1px solid #0572cc",
                    backdropFilter: "blur(5px)",
                    backgroundColor: "#0572cc",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#575757",
                    },
                  }}
                  aria-label="upload picture"
                  component="span"
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
            }
          >
            <Avatar
              alt="Travis Howard"
              sx={{
                width: 200,
                height: 200,
                border: "3px solid #0581e6",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU"
            />
          </Badge>
          <Typography
            component="p"
            variant="h6"
            className="text-primary-600"
            sx={{
              fontWeight: 600,
              fontSize: "1.2rem",
            }}
          >
            Bùi Thanh Duy
          </Typography>
        </div>
      )}
    </>
  );
}
