import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { DataRowContainer } from "@components/ui";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import { Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { openModal } from "@store/modal";
import { modalName } from "@data/constants";

type UserGridProps = {
  id?: string;
  name?: string;
  email?: string;
  status?: string;
  role?: string;
  modal?: boolean;
  isHead?: boolean;
};

export default function UserDataRow(props: UserGridProps) {
  const dispatch = useDispatch();

  const onClickSeeDetailHandler = (id: string | undefined) => {
    dispatch(openModal({ modalName: modalName.USER_DETAIL_MODAL }));
  };

  return (
    <>
      <DataRowContainer isHead={props.isHead}>
        <div className="min-w-[50px] max-w-[50px] truncate">{props.id}</div>
        <div className="min-w-[200px] max-w-[200px] truncate">{props.name}</div>
        <div className="min-w-[300px] max-w-[300px] truncate">
          {props.email}
        </div>
        <div className="min-w-[100px] max-w-[100px] truncate">
          {props.status}
        </div>
        <div className="min-w-[100px] max-w-[150px] truncate">{props.role}</div>
        {!props.isHead && (
          <div className="flex gap-2 min-w-[150px] max-w-[150px]">
            <Tooltip title="Xem chi tiết">
              <IconButton onClick={() => onClickSeeDetailHandler(props.id)}>
                <RemoveRedEyeRoundedIcon color="success" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Xoá người dùng">
              <IconButton>
                <DeleteOutlineOutlinedIcon color="error" />
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
