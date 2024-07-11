import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import { getAccessToken } from "@utils/authUtils";
import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import api from "@utils/axios";
import { toast } from "react-toastify";
import { toastTifyOptions } from "@utils/toastifyUtils";
import { AxiosError } from "axios";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

type DeleteModalProps = {
  isDeleteModalOpen: boolean;
  onClose?: () => void;
  jobId?: string;
  onReload?: () => void;
};

export default function DeleteModal(props: DeleteModalProps) {
  const handleClose = () => {
    props.onClose && props.onClose();
  };

  const handleDelete = async () => {
    try {
      const res = await api.delete(`/jobs/${props.jobId}`, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      toast.success(res.data.message, toastTifyOptions);
      props.onReload && props.onReload();
      handleClose();
    } catch (err) {
      const typedError = err as AxiosError;
      const data = typedError.response?.data as {
        message: string;
        status: number;
      };
      toast.error(data.message, toastTifyOptions);
    }
  };

  return (
    <React.Fragment>
      <Dialog
        open={props.isDeleteModalOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Thông báo"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn muốn xoá công việc này không?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" size="small">
            Huỷ
          </Button>
          <Button
            onClick={handleDelete}
            autoFocus
            variant="contained"
            color="error"
            size="small"
          >
            Xoá
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
