import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { DataRowContainer } from "@components/ui";
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";

type CompanyGridProps = {
  id?: string;
  name?: string;
  email?: string;
  isVerified?: string;
  isHead?: boolean;
  openModal?: (id: string) => void;
};

export default function CompanyDataRow(props: CompanyGridProps) {
  const onClickSeeDetailHandler = (id: string) => {
    props.openModal && props.openModal(id);
  };

  return (
    <>
      <DataRowContainer isHead={props.isHead}>
        <div className="min-w-[50px] max-w-[50px] truncate">{props.id}</div>
        <div className="min-w-[350px] max-w-[350px] truncate">{props.name}</div>
        <div className="min-w-[200px] max-w-[200px] truncate">
          {props.email}
        </div>
        <div className="min-w-[100px] max-w-[100px] truncate">
          {props.isVerified}
        </div>
        {!props.isHead && (
          <div className="flex gap-2 min-w-[150px] max-w-[150px]">
            <Tooltip title="Xem chi tiết">
              <IconButton
                onClick={() => onClickSeeDetailHandler(props.id || "")}
              >
                <EditIcon color="primary" />
              </IconButton>
            </Tooltip>
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
