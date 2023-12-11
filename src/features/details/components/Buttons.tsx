import Button from "@mui/material/Button";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { ApplicationJobModal } from "@features/applyJob";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@store";
import { open } from "@store/applyJob";

const styles = {
  textTransform: "none",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.6rem",
};

export default function Buttons() {
  const isModalOpen = useSelector(
    (state: RootState) => state.applyModal.isOpen
  );
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(open());
  };

  return (
    <>
      {isModalOpen && <ApplicationJobModal />}
      <div className="w-2/3">
        <Button
          variant="contained"
          color="primary"
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
          sx={styles}
          startIcon={<FavoriteBorderRoundedIcon />}
        >
          Yêu thích
        </Button>
      </div>
    </>
  );
}
