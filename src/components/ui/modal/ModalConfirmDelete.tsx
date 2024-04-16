import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import { RootState } from "@store";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@store/modal";
import { modalName } from "@data/constants";
import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import api from "@utils/axios";
import { getAccessToken } from "@utils/authUtils";
import { toastTifyOptions } from "@utils/toastifyUtils";
import { toast } from "react-toastify";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

type ModalConfirmDeleteProps = {
  onVerified?: () => void;
  content?: string;
  type?: string;
};

export default function ModalConfirmDelete(props: ModalConfirmDeleteProps) {
  const isDeleteModalOpen = useSelector(
    (state: RootState) => state.modals.deleteConfirmModal
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal({ modalName: modalName.CONFIRM_DELETE_MODAL }));
  };

  const deleleHandler = async () => {
    try {
      const res = await api.delete(`/${props.type}`, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      toast.success(res.data.message, toastTifyOptions);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <Dialog
        open={isDeleteModalOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Thông báo"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" size="small">
            Huỷ
          </Button>
          <Button
            onClick={deleleHandler}
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
