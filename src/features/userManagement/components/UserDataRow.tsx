import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

type UserGridProps = {
  id?: string;
  name?: string;
  email?: string;
  date?: string;
  role?: string;
  modal?: boolean;
  isHead?: boolean;
};

export default function UserDataRow(props: UserGridProps) {
  return (
    <>
      <div
        className={`flex items-center gap-2 px-8 ${
          props.isHead ? "font-semibold" : ""
        }`}
      >
        <div className="min-w-[100px]">{props.id}</div>
        <div className="min-w-[300px]">{props.name}</div>
        <div className="min-w-[300px]">{props.email}</div>
        <div className="min-w-[150px]">{props.date}</div>
        <div className="min-w-[100px]">{props.role}</div>
        {!props.isHead && (
          <div className="flex gap-2 min-w-[200px]">
            <IconButton>
              <ModeEditOutlineRoundedIcon color="primary" />
            </IconButton>
            <IconButton>
              <DeleteOutlineOutlinedIcon color="error" />
            </IconButton>
          </div>
        )}
        {props.isHead && <div className="min-w-[200px]">Tuỳ chỉnh</div>}
      </div>
      <Divider />
    </>
  );
}
