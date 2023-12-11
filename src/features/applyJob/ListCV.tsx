import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const optionBtnStyles = {
  marginLeft: "auto",
  textTransform: "none",
  selfAlign: "flex-end",
};

export default function ListCV() {
  return (
    <ul className="flex flex-col gap-2 my-2">
      <li className="text-sm font-thin flex items-center">
        <span>Java fresher</span>
        <div className="btn-group flex items-center ml-auto gap-1">
          <Button
            color="primary"
            variant="contained"
            size="small"
            sx={optionBtnStyles}
          >
            Chọn
          </Button>
          <Button color="primary" size="small" sx={optionBtnStyles}>
            Xem
          </Button>
        </div>
      </li>
      <Divider />

      <li className="text-sm font-thin flex items-center">
        <span>Java fresher</span>
        <div className="btn-group flex items-center ml-auto gap-1">
          <Button
            color="primary"
            variant="contained"
            size="small"
            sx={optionBtnStyles}
          >
            Chọn
          </Button>
          <Button color="primary" size="small" sx={optionBtnStyles}>
            Xem
          </Button>
        </div>
      </li>
      <Divider />

      <li className="text-sm font-thin flex items-center">
        <span>Java fresher</span>
        <div className="btn-group flex items-center ml-auto gap-1">
          <Button
            color="primary"
            variant="contained"
            size="small"
            sx={optionBtnStyles}
          >
            Chọn
          </Button>
          <Button color="primary" size="small" sx={optionBtnStyles}>
            Xem
          </Button>
        </div>
      </li>
    </ul>
  );
}
