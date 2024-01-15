import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import Button from "@mui/material/Button";
import SearchInput from "@components/form/Input/SearchInput";
import { NormalSelect, SearchSelect } from "@components/form";

import { useRouteLoaderData } from "react-router-dom";
import { Option } from "@data/interface";
import { useLocationAPI } from "@hooks";
import { useDispatch, useSelector } from "react-redux";
import { setJobFilter } from "@store/filterOption";
import { RootState } from "@store";

export default function BasicFilter() {
  const data = useRouteLoaderData("findJob");
  const locations = useLocationAPI();
  const dispatch = useDispatch();
  const jobFilter = useSelector((state: RootState) => state.jobFilter);

  const { experienceRanges, salaryRanges } = data as {
    experienceRanges: Option[];
    salaryRanges: Option[];
  };

  const onSelectLocationHandler = (option: Option) => {
    dispatch(setJobFilter({ ...jobFilter, location: option.id }));
    console.log(jobFilter);
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
          initValue={{ id: "0", name: "Tất cả địa điểm" }}
          id="location"
          onSelect={(option: Option) => onSelectLocationHandler(option)}
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
          initValue={{ id: "0", name: "Tất cả kinh nghiệm" }}
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
          initValue={{ id: "0", name: "Tất cả mức lương" }}
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
