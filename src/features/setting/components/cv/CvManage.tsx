import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Divider from "@mui/material/Divider";
import SettingHeader from "../SettingHeader";

export default function CvManage() {
  return (
    <div className="p-4">
      <SettingHeader />
      <div className="m-auto p-5">
        <div>
          <div className="flex item-center justify-between mb-2">
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ fontWeight: 600 }}
              className="text-gray-400"
            >
              CV đã lưu
            </Typography>
            <Button
              startIcon={<AddRoundedIcon />}
              size="small"
              color="primary"
              variant="contained"
            >
              Tạo mới
            </Button>
          </div>
          <Divider />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            <div className="w-full h-40 bg-primary-100 rounded-md"></div>
            <div className="w-full h-40 bg-primary-100 rounded-md"></div>
            <div className="w-full h-40 bg-primary-100 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
