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
import { useDispatch } from "react-redux";
import { modalName } from "@data/constants";
import { openModal } from "@store/modal";
import { Link } from "react-router-dom";
import { JobDetailType, RecruiterJobCardProps } from "@data/interface";
import api from "@utils/axios";
import { setJobDetail } from "@store/jobDetail";

export default function RecruiterJobCard(props: RecruiterJobCardProps) {
  const { id, title, dueDate } = props;
  const dispatch = useDispatch();

  const onDeletePostHandler = (id?: string) => {
    console.log(id);
    dispatch(openModal({ modalName: modalName.DELETE_MODAL }));
  };

  const onOpenEditModal = async (id?: string) => {
    try {
      const res = await api.get(`/jobs/${id}`);
      const jobDetails = res.data.data.job as JobDetailType;
      console.log(jobDetails);
      dispatch(setJobDetail(jobDetails));
    } catch (err) {
      console.log(err);
    }

    dispatch(openModal({ modalName: modalName.EDIT_JOB_MODAL }));
  };

  return (
    <Card sx={{ display: "flex", bgcolor: "#f5fbff" }}>
      <CardContent>
        <Typography variant="body1" color="primary" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="body2">Hạn ứng tuyển: {dueDate}</Typography>
      </CardContent>
      <CardActions sx={{ marginLeft: "auto" }}>
        <Link to={"/recruiter/job-application/" + id}>
          <Tooltip title="Xem đơn ứng tuyển">
            <IconButton>
              <SendOutlinedIcon color="success"></SendOutlinedIcon>
            </IconButton>
          </Tooltip>
        </Link>

        <Tooltip title="Chỉnh sửa">
          <IconButton onClick={() => onOpenEditModal(id)}>
            <EditOutlinedIcon color="primary"></EditOutlinedIcon>
          </IconButton>
        </Tooltip>
        <Tooltip title="Xoá">
          <IconButton onClick={() => onDeletePostHandler(id)}>
            <DeleteOutlineOutlinedIcon color="error"></DeleteOutlineOutlinedIcon>
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
