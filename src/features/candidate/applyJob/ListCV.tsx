import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { Link } from "react-router-dom";

const optionBtnStyles = {
  marginLeft: "auto",
  textTransform: "none",
  selfAlign: "flex-end",
};

type Cv = {
  id: string;
  name: string;
  cvUrl: string;
};

type ListCVProps = {
  CVs: Cv[];
  onChooseCV: (id: string) => void;
};

export default function ListCV(props: ListCVProps) {
  const [CVs, _] = useState<Cv[]>(props.CVs);
  const [id, setId] = useState<string>("");

  const hanldeChooseCV = (cv: Cv) => {
    setId(cv.id);
    props.onChooseCV(cv.id);
  };

  const hanldeRemoveChosenCV = () => {
    setId("");
  };

  return (
    <ul className="flex flex-col gap-2 my-2">
      {CVs.map((cv) => (
        <li key={cv.id} className="text-sm font-thin flex items-center">
          <span>{cv.name}</span>
          <div className="btn-group flex items-center ml-auto gap-1">
            {cv.id === id ? (
              <Button
                color="primary"
                variant="contained"
                size="small"
                sx={optionBtnStyles}
                onClick={() => {
                  if (cv.id === id) hanldeRemoveChosenCV();
                  else hanldeChooseCV(cv);
                }}
              >
                Bỏ chọn
              </Button>
            ) : (
              <Button
                color="primary"
                variant="contained"
                size="small"
                sx={optionBtnStyles}
                onClick={() => hanldeChooseCV(cv)}
                disabled={cv.id !== id && id !== ""}
              >
                Chọn
              </Button>
            )}

            <Link to={cv.cvUrl}>
              <Button color="primary" size="small" sx={optionBtnStyles}>
                Xem
              </Button>
            </Link>
          </div>
          <Divider />
        </li>
      ))}
      <Divider />
    </ul>
  );
}
