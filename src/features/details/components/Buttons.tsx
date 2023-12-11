import Button from "@mui/material/Button";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useNavigate } from "react-router-dom";

const styles = {
  textTransform: "none",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.6rem",
};

export default function Buttons() {
  const navigation = useNavigate();

  const clickHandler = () => {
    navigation("/apply");
  };

  return (
    <>
      <div className="w-2/3">
        <Button
          variant="contained"
          color="primary"
          onClick={clickHandler}
          sx={styles}
        >
          <SendRoundedIcon />
          Ứng tuyển ngay
        </Button>
      </div>
      <div className="w-1/3">
        <Button
          variant="outlined"
          onClick={clickHandler}
          color="primary"
          sx={styles}
        >
          <FavoriteBorderRoundedIcon />
          Yêu thích
        </Button>
      </div>
    </>
  );
}
