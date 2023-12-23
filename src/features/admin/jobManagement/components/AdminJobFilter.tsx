import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import Button from "@mui/material/Button";
import SearchInput from "@components/form/Input/SearchInput";
import { Select } from "@components/form";

const companies = [
  { value: "0", name: "Chọn công ty" },
  { value: "1", name: "Microsoft" },
  { value: "2", name: "Google" },
  { value: "3", name: "Facebook" },
  { value: "4", name: "Amazon" },
];

const filterOptions = [
  { value: "0", name: "Lọc công việc" },
  { value: "1", name: "Việc xem nhiều nhất" },
  { value: "2", name: "Việc yêu thích nhất" },
  { value: "3", name: "Việc ứng tuyển nhiều nhất" },
];

export default function AdminJobFilter() {
  return (
    <div className="grid grid-cols-10 gap-2 items-center py-4 bg-white rounded-b-md">
      <Select
        black
        initValue={filterOptions[0]}
        options={filterOptions}
        startIcon={
          <LocationOnOutlinedIcon
            sx={{ width: "24px", height: "24px" }}
            color="primary"
          />
        }
        styles="col-span-2"
      />

      <Select
        black
        initValue={companies[0]}
        options={companies}
        startIcon={
          <StarBorderOutlinedIcon
            sx={{ width: "24px", height: "24px" }}
            color="primary"
          />
        }
        styles="col-span-2"
      />

      <SearchInput
        styles="col-span-3"
        placeholder="Nhập tên hoặc mã công việc"
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
