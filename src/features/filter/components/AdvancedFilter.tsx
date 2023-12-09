import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { Select } from "@components/form";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ChairAltOutlinedIcon from "@mui/icons-material/ChairAltOutlined";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import { fields, majors, postTypes, workTimes, positions } from "@data/api";

export default function AdvancedFilter() {
  return (
    <div className="grid grid-cols-10 gap-2 items-center">
      <Select
        initValue={fields[0]}
        options={fields}
        startIcon={
          <BusinessOutlinedIcon
            sx={{ width: "20px", height: "20px" }}
            color="primary"
          />
        }
        styles="col-span-2"
        size="sm"
      />
      <Select
        initValue={majors[0]}
        options={majors}
        startIcon={
          <AppsOutlinedIcon
            sx={{ width: "20px", height: "20px" }}
            color="primary"
          />
        }
        styles="col-span-2"
        size="sm"
      />
      <Select
        initValue={positions[0]}
        options={positions}
        startIcon={
          <ChairAltOutlinedIcon
            sx={{ width: "20px", height: "20px" }}
            color="primary"
          />
        }
        styles="col-span-2"
        size="sm"
      />
      <Select
        initValue={workTimes[0]}
        options={workTimes}
        startIcon={
          <CasesOutlinedIcon
            sx={{ width: "20px", height: "20px" }}
            color="primary"
          />
        }
        styles="col-span-2"
        size="sm"
      />
      <Select
        initValue={postTypes[0]}
        options={postTypes}
        startIcon={
          <StarBorderOutlinedIcon
            sx={{ width: "20px", height: "20px" }}
            color="primary"
          />
        }
        styles="col-span-2"
        size="sm"
      />
    </div>
  );
}
