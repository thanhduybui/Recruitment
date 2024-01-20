import Button from "@mui/material/Button";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { ApplicationJobModal } from "@features/candidate/applyJob";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@store";
import { openModal } from "@store/modal";
import { modalName } from "@data/constants";

const { APPLY_MODAL } = modalName;

const styles = {
  textTransform: "none",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.6rem",
};

type ButtonsProps = {
  disabled?: boolean;
};

export default function Buttons({ disabled }: ButtonsProps) {
  const isApplyModalOpen = useSelector(
    (state: RootState) => state.modals.applyModal
  );
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(openModal({ modalName: APPLY_MODAL }));
  };

  return (
    <>
      {isApplyModalOpen && <ApplicationJobModal />}
      <div className="w-2/3">
        <Button
          variant="contained"
          color="primary"
          disabled={!disabled}
          onClick={clickHandler}
          sx={styles}
          startIcon={<SendRoundedIcon />}
        >
          Ứng tuyển ngay
        </Button>
      </div>
      <div className="w-1/3">
        <Button
          variant="outlined"
          onClick={clickHandler}
          color="primary"
          disabled={!disabled}
          sx={styles}
          startIcon={<FavoriteBorderRoundedIcon />}
        >
          Yêu thích
        </Button>
      </div>
    </>
  );
}
