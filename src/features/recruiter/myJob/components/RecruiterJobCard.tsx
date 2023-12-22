import Typography from "@mui/material/Typography";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Tooltip,
} from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

export default function RecruiterJobCard() {
  return (
    <Card sx={{ display: "flex", bgcolor: "#f5fbff" }}>
      <CardContent>
        <Typography variant="body1" color="primary" fontWeight={600}>
          Fresher Java tiếng Nhật
        </Typography>
        <Typography variant="body2">Hạn ứng tuyển: 20/11/2024</Typography>
      </CardContent>
      <CardActions sx={{ marginLeft: "auto" }}>
        <Tooltip title="Xem đơn ứng tuyển">
          <IconButton>
            <SendOutlinedIcon color="success"></SendOutlinedIcon>
          </IconButton>
        </Tooltip>
        <Tooltip title="Chỉnh sửa">
          <IconButton>
            <EditOutlinedIcon color="primary"></EditOutlinedIcon>
          </IconButton>
        </Tooltip>
        <Tooltip title="Xoá">
          <IconButton>
            <DeleteOutlineOutlinedIcon color="error"></DeleteOutlineOutlinedIcon>
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
