import DescriptionIcon from "@mui/icons-material/Description";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import Button from "@mui/material/Button";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { ListCV, UploadForm } from ".";
import { IconButton } from "@mui/material";

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+event.target.value);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30 ">
      <div className="bg-white p-4 rounded-lg w-1/3 shadow-sm flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg mb-2">
            Ứng tuyển cho vị trí
            <span className="font-semibold text-primary-500">
              {" "}
              Lập trình viên di động
            </span>
          </h1>
          <IconButton>
            <CloseRoundedIcon />
          </IconButton>
        </div>

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
          <Button variant="outlined" color="primary">
            Huỷ
          </Button>
          <Button variant="contained" color="primary">
            Ứng tuyển
          </Button>
        </div>
      </div>
    </div>
  );
}
