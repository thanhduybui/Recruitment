import { SelectInput } from "@components/form";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import Button from "@mui/material/Button";
import SearchInput from "./SearchInput";
const locations = ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Hải Phòng"];
const expiriences = [
  "Chưa có kinh nghiệm",
  "Dưới 1 năm",
  "1 - 3 năm",
  "3 - 5 năm",
  "Trên 5 năm",
];
const salaryRanges = [
  "Dưới 5 triệu",
  "5 - 10 triệu",
  "10 - 20 triệu",
  "Trên 20 triệu",
];
export default function BasicFilter() {
  return (
    <div className="grid grid-cols-10 gap-2 items-center py-4">
      <SearchInput styles="col-span-3" />
      <SelectInput
        defaultValue="Tất cả vị trí"
        options={locations}
        startIcon={<LocationOnOutlinedIcon color="primary" />}
        styles="col-span-2"
      />
      <SelectInput
        defaultValue="Tất cả kinh nghiệm"
        options={expiriences}
        startIcon={<StarBorderOutlinedIcon color="primary" />}
        styles="col-span-2"
      />
      <SelectInput
        defaultValue="Tất cả mức lương"
        options={salaryRanges}
        startIcon={<AttachMoneyOutlinedIcon color="primary" />}
        styles="col-span-2"
      />
      <Button
        color="primary"
        variant="contained"
        size="large"
        style={{ textTransform: "none" }}
      >
        Tìm
      </Button>
    </div>
  );
}
