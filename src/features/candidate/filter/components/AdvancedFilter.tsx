import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { NormalSelect, SearchSelect } from "@components/form";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ChairAltOutlinedIcon from "@mui/icons-material/ChairAltOutlined";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import { fields, majors, postTypes, workTimes, positions } from "@data/api";

export default function AdvancedFilter() {
  return (
    <div className="grid grid-cols-10 gap-2 items-center bg-white">
      <div className="col-span-2">
        {" "}
        <SearchSelect
          small
          bold
          options={fields}
          startIcon={
            <BusinessOutlinedIcon
              sx={{ width: "20px", height: "20px" }}
              color="primary"
            />
          }
        />
      </div>
      <div className="col-span-2">
        {" "}
        <SearchSelect
          options={majors}
          small
          bold
          startIcon={
            <AppsOutlinedIcon
              sx={{ width: "20px", height: "20px" }}
              color="primary"
            />
          }
        />
      </div>
      <div className="col-span-2">
        {" "}
        <NormalSelect
          options={positions}
          small
          bold
          startIcon={
            <ChairAltOutlinedIcon
              sx={{ width: "20px", height: "20px" }}
              color="primary"
            />
          }
        />
      </div>
      <div className="col-span-2">
        {" "}
        <NormalSelect
          options={workTimes}
          small
          bold
          startIcon={
            <CasesOutlinedIcon
              sx={{ width: "20px", height: "20px" }}
              color="primary"
            />
          }
        />
      </div>

      <div className="col-span-2">
        {" "}
        <NormalSelect
          options={postTypes}
          small
          bold
          startIcon={
            <StarBorderOutlinedIcon
              sx={{ width: "20px", height: "20px" }}
              color="primary"
            />
          }
        />
      </div>
    </div>
  );
}
