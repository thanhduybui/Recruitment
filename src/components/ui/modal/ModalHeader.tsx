import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { closeModal } from "@store/modal";

type ModalHeaderProps = {
  modalName: string;
  title: string;
  textHighlight?: string;
};

export default function ModalHeader(props: ModalHeaderProps) {
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(closeModal({ modalName: props.modalName }));
    console.log(props.modalName);
  };
  return (
    <div className="flex items-center justify-between border-b-4 border-primary-500">
      <h1 className="text-lg font-semibold">
        {props.title}
        <span className="font-semibold text-primary-500">
          {" "}
          {props.textHighlight}
        </span>
      </h1>
      <IconButton onClick={closeHandler}>
        <CloseRoundedIcon />
      </IconButton>
    </div>
  );
}
