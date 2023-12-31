import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import Button from "@mui/material/Button";
import SearchInput from "@components/form/Input/SearchInput";
import { NormalSelect, SearchSelect } from "@components/form";

import { useRouteLoaderData } from "react-router-dom";
import { Option } from "@data/interface";
import { useLocationAPI } from "@hooks";

export default function BasicFilter() {
  const data = useRouteLoaderData("findJob");
  const locations = useLocationAPI();

  const { experienceRanges, salaryRanges } = data as {
    experienceRanges: Option[];
    salaryRanges: Option[];
  };

  return (
    <div className="grid grid-cols-10 gap-2 items-center py-4 bg-white rounded-b-md">
      <SearchInput
        styles="col-span-3"
        placeholder="Tìm kiếm việc làm, công ty"
      />
      <div className="col-span-2">
        <SearchSelect
          bold
          options={locations}
          initValue={{ id: "0", name: "Chọn địa điểm" }}
          startIcon={
            <LocationOnOutlinedIcon
              sx={{ width: "24px", height: "24px" }}
              color="primary"
            />
          }
        />
      </div>

      <div className="col-span-2">
        <NormalSelect
          bold
          options={experienceRanges}
          initValue={{ id: "0", name: "Chọn kinh nghiệm" }}
          startIcon={
            <StarBorderOutlinedIcon
              sx={{ width: "24px", height: "24px" }}
              color="primary"
            />
          }
        />
      </div>

      <div className="col-span-2">
        <NormalSelect
          bold
          options={salaryRanges}
          initValue={{ id: "0", name: "Chọn mức lương" }}
          startIcon={
            <AttachMoneyOutlinedIcon
              sx={{ width: "24px", height: "24px" }}
              color="primary"
            />
          }
        />
      </div>

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
