import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { DataRowContainer } from "@components/ui";

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
      <DataRowContainer isHead={props.isHead}>
        <div className="min-w-[100px] max-w-[100px] truncate">{props.id}</div>
        <div className="min-w-[300px] max-w-[300px] truncate">{props.name}</div>
        <div className="min-w-[300px] max-w-[300px] truncate">
          {props.email}
        </div>
        <div className="min-w-[150px] max-w-[150px] truncate">{props.date}</div>
        <div className="min-w-[100px] max-w-[150px] truncate">{props.role}</div>
        {!props.isHead && (
          <div className="flex gap-2 min-w-[200px] max-w-[200px]">
            <IconButton>
              <ModeEditOutlineRoundedIcon color="primary" />
            </IconButton>
            <IconButton>
              <DeleteOutlineOutlinedIcon color="error" />
            </IconButton>
          </div>
        )}
        {props.isHead && (
          <div className="min-w-[200px] max-w-[200px]">Tuỳ chỉnh</div>
        )}
      </DataRowContainer>
      <Divider />
    </>
  );
}
