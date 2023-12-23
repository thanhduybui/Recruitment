import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import { FileDropZone } from "@components/form/File";

export default function UserModalAvatar() {
  return (
    <div className="flex items-stretch px-2 pb-10 gap-4">
      <FileDropZone></FileDropZone>
      <div className="flex-none flex flex-col gap-4">
        <div className="flex items-center justify-center">
          <Avatar
            alt="Travis Howard"
            sx={{ width: 100, height: 100, border: "4px solid #0581e6" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU"
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
