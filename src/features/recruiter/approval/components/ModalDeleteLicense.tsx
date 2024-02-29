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

type ModalDeleteLicenseProps = {
  onVerified: () => void;
};

export default function ModalDeleteLicense(props: ModalDeleteLicenseProps) {
  const isDeleteModalOpen = useSelector(
    (state: RootState) => state.modals.deleteLicenseModal
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal({ modalName: modalName.DELETE_LICENSE_MODAL }));
  };

  const deleteLicense = async () => {
    try {
      const res = await api.delete("/companies/business-license", {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      });
      toast.success(res.data.message, toastTifyOptions);
      dispatch(closeModal({ modalName: modalName.DELETE_LICENSE_MODAL }));
      props.onVerified();
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
            Xoá giấy chứng nhận này ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" size="small">
            Huỷ
          </Button>
          <Button
            onClick={deleteLicense}
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
