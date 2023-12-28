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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

type InformModalProps = {
  content?: string;
};

export default function InformModalProps({ content }: InformModalProps) {
  const isInformModalOpen = useSelector(
    (state: RootState) => state.modals.informModal
  );
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal({ modalName: modalName.INFORM_MODAL }));
  };

  return (
    <React.Fragment>
      <Dialog
        open={isInformModalOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Thông báo"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" size="small">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
