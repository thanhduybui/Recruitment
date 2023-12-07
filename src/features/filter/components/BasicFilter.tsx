import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import Button from "@mui/material/Button";
import SearchInput from "./SearchInput";
import { Select } from "@components/form";

const initLocation = {
  value: "all",
  name: "Tất cả vị trí",
};
const locations = [
  { value: "1", name: "Hà Nội" },
  { value: "2", name: "Hồ Chí Minh" },
  { value: "3", name: "Đà Nẵng" },
  { value: "4", name: "Cần Thơ" },
  { value: "5", name: "Hải Phòng" },
  { value: "6", name: "Bình Dương" },
  { value: "7", name: "Đồng Nai" },
  { value: "8", name: "Khánh Hòa" },
  { value: "9", name: "Hải Dương" },
  { value: "10", name: "Long An" },
  { value: "11", name: "Quảng Nam" },
  { value: "12", name: "Bà Rịa - Vũng Tàu" },
  { value: "13", name: "Đắk Lắk" },
  { value: "14", name: "Cà Mau" },
  { value: "15", name: "Bình Thuận" },
  { value: "16", name: "Lâm Đồng" },
  { value: "17", name: "Thừa Thiên Huế" },
  { value: "18", name: "Kiên Giang" },
  { value: "19", name: "Bắc Ninh" },
  { value: "20", name: "Quảng Ninh" },
  { value: "21", name: "Thanh Hóa" },
  { value: "22", name: "Nghệ An" },
  { value: "23", name: "Hà Nam" },
  { value: "24", name: "Nam Định" },
  { value: "25", name: "Quảng Ngãi" },
  { value: "26", name: "Bình Phước" },
  { value: "27", name: "Bình Định" },
  { value: "28", name: "Gia Lai" },
  { value: "29", name: "Hưng Yên" },
  { value: "30", name: "Bạc Liêu" },
  { value: "31", name: "Bắc Giang" },
  { value: "32", name: "Vĩnh Phúc" },
  { value: "33", name: "Tiền Giang" },
  { value: "34", name: "Thái Bình" },
  { value: "35", name: "Thái Nguyên" },
  { value: "36", name: "Lào Cai" },
];

const initExpirience = { value: "all", name: "Tất cả kinh nghiệm" };
const expiriences = [
  { value: "0", name: "Chưa có kinh nghiệm" },
  { value: "1", name: "Dưới 1 năm" },
  { value: "3", name: "1-3 năm" },
  { value: "5", name: "3 - 5 năm" },
  { value: "7", name: "Trên 5 năm" },
];

const initSalaryRange = { value: "all", name: "Tất cả mức lương" };
const salaryRanges = [
  { value: "0", name: "Dưới 5 triệu" },
  { value: "5", name: "5 - 10 triệu" },
  { value: "10", name: "10 - 20 triệu" },
  { value: "20", name: "20 - 30 triệu" },
  { value: "30", name: "30 - 50 triệu" },
  { value: "50", name: "Trên 50 triệu" },
];
export default function BasicFilter() {
  return (
    <div className="grid grid-cols-10 gap-2 items-center py-4">
      <SearchInput styles="col-span-3" />
      <Select
        initValue={initLocation}
        options={locations}
        startIcon={<LocationOnOutlinedIcon color="primary" />}
        styles="col-span-2"
      />
      <Select
        initValue={initExpirience}
        options={expiriences}
        startIcon={<StarBorderOutlinedIcon color="primary" />}
        styles="col-span-2"
      />
      <Select
        initValue={initSalaryRange}
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
