import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import { FileDropZone } from "@components/form/File";

type UserModalAvatarProps = {
  image?: string;
};
export default function UserModalAvatar({ image }: UserModalAvatarProps) {
  return (
    <div className="flex items-stretch px-2 pb-10 gap-4">
      <FileDropZone></FileDropZone>
      <div className="flex-none flex flex-col gap-4">
        <div className="flex items-center justify-center">
          <Avatar
            alt="Travis Howard"
            sx={{ width: 100, height: 100, border: "4px solid #0581e6" }}
            src={image}
          />
        </div>
        <Button color="primary" variant="contained" size="small">
          Thay ảnh mới
        </Button>
        <Button color="error" variant="contained" size="small">
          Xoá ảnh
        </Button>
        <Button color="primary" variant="outlined" size="small">
          Thoát
        </Button>
      </div>
    </div>
  );
}
