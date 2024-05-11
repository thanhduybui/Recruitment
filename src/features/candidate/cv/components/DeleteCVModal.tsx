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
import { toast } from "react-toastify";
import { toastTifyOptions } from "@utils/toastifyUtils";
import { clearCVIdToDelete } from "@store/deleteCvId";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

type DeleteCVModalProps = {
  onReload?: () => void;
};

export default function DeleteCVModal(props: DeleteCVModalProps) {
  const isDeleteModalOpen = useSelector(
    (state: RootState) => state.modals.deleteCVModal
  );
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal({ modalName: modalName.DELETE_CV_MODAL }));
  };

  const deleteCVId = useSelector(
    (state: RootState) => state.deleteCvId.cvIdToDelete
  );

  const handleDeleteCV = async () => {
    try {
      await api.delete(`/cv/${deleteCVId}`, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      toast.success("Xoá CV thành công", toastTifyOptions);
      if (props.onReload) {
        props.onReload();
      }
      dispatch(clearCVIdToDelete());
    } catch (err) {
      toast.error("Xoá CV thất bại", toastTifyOptions);
    } finally {
      dispatch(closeModal({ modalName: modalName.DELETE_CV_MODAL }));
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
            Bạn muốn xóa CV này?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" size="small">
            Huỷ
          </Button>
          <Button
            onClick={handleDeleteCV}
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
