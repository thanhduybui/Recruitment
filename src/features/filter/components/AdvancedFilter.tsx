import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { Select } from "@components/form";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ChairAltOutlinedIcon from "@mui/icons-material/ChairAltOutlined";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
const initField = { value: "all", name: "Tất cả lĩnh vực" };
const fields = [
  { value: "1", name: "Công nghệ thông tin" },
  { value: "2", name: "Thiết kế đồ họa" },
  { value: "3", name: "Kinh doanh" },
  { value: "4", name: "Marketing" },
  { value: "5", name: "Nhân sự" },
  { value: "6", name: "Tài chính" },
  { value: "7", name: "Bán hàng" },
  { value: "8", name: "Hành chính" },
  { value: "9", name: "Khác" },
];

const initMajor = { value: "all", name: "Tất cả ngành nghề" };
const majors = [
  { value: "1", name: "Sales" },
  { value: "2", name: "Thiết kế đồ họa" },
  { value: "3", name: "Lập trình di động" },
  { value: "4", name: "Lập trình web" },
  { value: "5", name: "Kiểm toán viên" },
  { value: "6", name: "Kỹ sư xây dựng" },
  { value: "7", name: "Giảng viên" },
  { value: "8", name: "Giáo viên mầm non" },
];

const initPosition = { value: "all", name: "Tất cả vị trí" };
const positions = [
  { value: "1", name: "Nhân viên" },
  { value: "2", name: "Trưởng phòng" },
  { value: "3", name: "Quản lý" },
  { value: "4", name: "Giám đốc" },
  { value: "5", name: "Khác" },
];

const initWorkTime = { value: "all", name: "Tất cả hình thức" };
const workTimes = [
  { value: "1", name: "Toàn thời gian" },
  { value: "2", name: "Bán thời gian" },
  { value: "3", name: "Thực tập" },
  { value: "4", name: "Khác" },
];

const postType = { value: "all", name: "Tất cả loại tin" };
const postTypes = [
  { value: "1", name: "Vị trí tuyển dụng gấp" },
  { value: "2", name: "Vị trí hot nhất" },
];

export default function AdvancedFilter() {
  return (
    <div className="grid grid-cols-10 gap-2 items-center">
      <Select
        initValue={initField}
        options={fields}
        startIcon={<BusinessOutlinedIcon color="primary" />}
        styles="col-span-2"
        size="sm"
      />
      <Select
        initValue={initMajor}
        options={majors}
        startIcon={<AppsOutlinedIcon color="primary" />}
        styles="col-span-2"
        size="sm"
      />
      <Select
        initValue={initPosition}
        options={positions}
        startIcon={<ChairAltOutlinedIcon color="primary" />}
        styles="col-span-2"
        size="sm"
      />
      <Select
        initValue={initWorkTime}
        options={workTimes}
        startIcon={<CasesOutlinedIcon color="primary" />}
        styles="col-span-2"
        size="sm"
      />
      <Select
        initValue={postType}
        options={postTypes}
        startIcon={<StarBorderOutlinedIcon color="primary" />}
        styles="col-span-2"
        size="sm"
      />
    </div>
  );
}
