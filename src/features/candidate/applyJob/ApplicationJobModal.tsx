import DescriptionIcon from "@mui/icons-material/Description";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import Button from "@mui/material/Button";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { ListCV, UploadForm } from ".";
import {
  ModalBackdrop,
  ModalContentContainer,
  ModalHeader,
} from "@components/ui/modal";
import { modalName } from "@data/constants";
const { APPLY_MODAL } = modalName;
import { closeModal } from "@store/modal";

const formLabelStyles = {
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
  marginBottom: "0.5rem",
};

const btnStyles = {
  position: "absolute",
  right: "0.5rem",
  top: "0.3rem",
  textTransform: "none",
};

export default function ApplicationModal() {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(closeModal({ modalName: APPLY_MODAL }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+event.target.value);
  };

  return createPortal(
    <ModalBackdrop modalName={APPLY_MODAL}>
      <ModalContentContainer>
        <ModalHeader
          modalName={APPLY_MODAL}
          title="Ứng tuyển cho"
          textHighlight="Java Developer"
        />
        <FormControl>
          <FormLabel
            id="demo-controlled-radio-buttons-group"
            sx={formLabelStyles}
          >
            <DescriptionIcon color="primary" />
            <span className="text-gray-400 font-semibold">
              Chọn CV để ứng tuyển
            </span>
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <div
              className={`relative border-2 rounded-md px-2 mb-2 ${
                value === 1 ? "border-primary-400" : "border-gray-150"
              }`}
            >
              <FormControlLabel
                value={1}
                control={<Radio />}
                label="Chọn CV mặc định: Backend Intern"
              />
              <Button color="primary" size="small" sx={btnStyles}>
                Xem
              </Button>
            </div>
            <div
              className={`relative border-2 rounded-md px-2 mb-2 ${
                value === 2 ? "border-primary-400" : "border-gray-150"
              }`}
            >
              <FormControlLabel
                value={2}
                control={<Radio />}
                label="Chọn CV có sẳn"
              />
              {value === 2 && <ListCV />}
            </div>

            <div
              className={`relative border-2 border-dashed rounded-md px-2 mb-2 flex flex-col ${
                value === 3 ? "border-primary-400" : "border-gray-150"
              }`}
            >
              <FormControlLabel
                value={3}
                control={<Radio />}
                label="Tải CV lên"
              />
              {value === 3 && <UploadForm />}
            </div>
          </RadioGroup>
        </FormControl>

        <div className="flex items-center gap-3 ml-auto">
          <Button variant="outlined" color="primary" onClick={closeHandler}>
            Huỷ
          </Button>
          <Button variant="contained" color="primary">
            Ứng tuyển
          </Button>
        </div>
      </ModalContentContainer>
    </ModalBackdrop>,
    document.getElementById("modal") as HTMLElement
  );
}
