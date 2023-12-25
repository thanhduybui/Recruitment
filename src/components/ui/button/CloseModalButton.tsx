import Button from "@mui/material/Button";
import { closeModal } from "@store/modal";
import { useDispatch } from "react-redux";

type CloseModalButtonProps = {
  modalName: string;
};

export default function CloseModalButton({ modalName }: CloseModalButtonProps) {
  const dispatch = useDispatch();
  const closeModalHanlder = () => {
    dispatch(closeModal({ modalName: modalName }));
  };

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        sx={{ textTransform: "none" }}
        onClick={closeModalHanlder}
      >
        Thoát
      </Button>
    </>
  );
}
