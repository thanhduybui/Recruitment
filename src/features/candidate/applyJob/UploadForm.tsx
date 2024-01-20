import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextInput } from "@components/form";
import UploadRoundedIcon from "@mui/icons-material/UploadRounded";
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Divider } from "@mui/material";

export default function UploadForm() {
  return (
    <>
      <Typography variant="caption">
        Điền các thông tin sau. <span className="text-error-400">(*)</span> là
        bắt buộc
      </Typography>
      <form className="px-4 my-4 flex flex-col gap-2">
        <div>
          <TextInput label="Tên đầy đủ" type="text" required />
        </div>
        <div className="grid grid-cols-2 gap-x-2">
          <TextInput label="Số điện thoại" type="phone" required />
          <TextInput label="Email" type="email" required />
        </div>

        <Divider sx={{ margin: "12px 0px 12px" }} />

        <div className="flex items-center justify-between bg-gray-100 rounded-md px-2 py-1">
          <span>CV_Bui_Quang_Huy.pdf</span>
          <IconButton size="small">
            <CloseRoundedIcon />
          </IconButton>
        </div>

        <div className="w-fit m-auto mt-8">
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ textTransform: "none" }}
            startIcon={<UploadRoundedIcon />}
          >
            Tải file lên
          </Button>
        </div>
        <div className="text-gray-200 font-semibold m-auto">
          <Typography variant="caption" sx={{ margin: "auto" }}>
            Hỗ trợ định dạng .doc, .docx, pdf có kích thước dưới 5MB
          </Typography>
        </div>
      </form>
    </>
  );
}
