import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { JobDataRowProps } from "../interface";
import { DataRowContainer } from "@components/ui";

export default function JobDataRow(props: JobDataRowProps) {
  const { id, title, company, applyNumber, isHead, deadline } = props;
  return (
    <>
      <DataRowContainer isHead={isHead}>
        <div className="min-w-[100px] max-w-[100px] truncate">{id}</div>
        <div className="min-w-[300px] max-w-[300px] truncate">
          <span>{title}</span>
        </div>
        <div className="min-w-[300px] max-w-[300px] truncate">{company}</div>
        <div className="min-w-[150px] max-w-[150px] truncate">{deadline}</div>
        <div className="min-w-[150px] max-w-[150px] truncate">
          {applyNumber}
        </div>
        {!isHead && (
          <div className="flex gap-2 min-w-[200px] max-w-[200px]">
            <IconButton>
              <ModeEditOutlineRoundedIcon color="primary" />
            </IconButton>
            <IconButton>
              <DeleteOutlineOutlinedIcon color="error" />
            </IconButton>
          </div>
        )}
        {isHead && <div className="min-w-[200px] max-w-[200px]">Tuỳ chỉnh</div>}
      </DataRowContainer>
      <Divider />
    </>
  );
}
