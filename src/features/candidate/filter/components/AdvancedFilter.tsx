import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { NormalSelect, SearchSelect } from "@components/form";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ChairAltOutlinedIcon from "@mui/icons-material/ChairAltOutlined";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import { majors, postTypes } from "@data/api";
import { useRouteLoaderData } from "react-router-dom";
import { Option } from "@data/interface";

export default function AdvancedFilter() {
  const data = useRouteLoaderData("findJob");
  const { positions, fields, workModes } = data as {
    positions: Option[];
    fields: Option[];
    workModes: Option[];
  };

  return (
    <div className="grid grid-cols-10 gap-2 items-center bg-white">
      <div className="col-span-2">
        <SearchSelect
          small
          bold
          options={fields}
          initValue={{ id: "0", name: "Tất cả lĩnh vực" }}
          startIcon={
            <BusinessOutlinedIcon
              sx={{ width: "20px", height: "20px" }}
              color="primary"
            />
          }
        />
      </div>
      <div className="col-span-2">
        <SearchSelect
          options={majors}
          small
          bold
          initValue={{ id: "0", name: "Tất cả ngành nghề" }}
          startIcon={
            <AppsOutlinedIcon
              sx={{ width: "20px", height: "20px" }}
              color="primary"
            />
          }
        />
      </div>
      <div className="col-span-2">
        <NormalSelect
          options={positions}
          small
          bold
          initValue={{ id: "0", name: "Tất cả chức vụ" }}
          startIcon={
            <ChairAltOutlinedIcon
              sx={{ width: "20px", height: "20px" }}
              color="primary"
            />
          }
        />
      </div>
      <div className="col-span-2">
        <NormalSelect
          options={workModes}
          small
          bold
          initValue={{ id: "0", name: "Tất cả hình thức" }}
          startIcon={
            <CasesOutlinedIcon
              sx={{ width: "20px", height: "20px" }}
              color="primary"
            />
          }
        />
      </div>

      <div className="col-span-2">
        <NormalSelect
          options={postTypes}
          small
          bold
          initValue={{ id: "0", name: "Tất cả loại tin" }}
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
