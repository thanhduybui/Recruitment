import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import Button from "@mui/material/Button";
import SearchInput from "./SearchInput";
import { Select } from "@components/form";
import { locations } from "@data/api";
import { expieriences } from "@data/api";
import { salaryRanges } from "@data/api";

export default function BasicFilter() {
  return (
    <div className="grid grid-cols-10 gap-2 items-center py-4">
      <SearchInput styles="col-span-3" />
      <Select
        initValue={locations[0]}
        options={locations}
        startIcon={
          <LocationOnOutlinedIcon
            sx={{ width: "24px", height: "24px" }}
            color="primary"
          />
        }
        styles="col-span-2"
      />
      <Select
        initValue={expieriences[0]}
        options={expieriences}
        startIcon={
          <StarBorderOutlinedIcon
            sx={{ width: "24px", height: "24px" }}
            color="primary"
          />
        }
        styles="col-span-2"
      />
      <Select
        initValue={salaryRanges[0]}
        options={salaryRanges}
        startIcon={
          <AttachMoneyOutlinedIcon
            sx={{ width: "24px", height: "24px" }}
            color="primary"
          />
        }
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
