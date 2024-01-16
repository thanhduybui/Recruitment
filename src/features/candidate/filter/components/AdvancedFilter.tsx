import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { NormalSelect, SearchSelect } from "@components/form";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ChairAltOutlinedIcon from "@mui/icons-material/ChairAltOutlined";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import { majors, postTypes } from "@data/api";
import { useRouteLoaderData } from "react-router-dom";
import { Option } from "@data/interface";
import { useDispatch, useSelector } from "react-redux";
import { setJobFilter } from "@store/filterOption";
import { RootState } from "@store";

export default function AdvancedFilter() {
  const data = useRouteLoaderData("findJob");
  const dispatch = useDispatch();
  const jobFilter = useSelector((state: RootState) => state.jobFilter);
  const { positions, fields, workModes } = data as {
    positions: Option[];
    fields: Option[];
    workModes: Option[];
  };

  const onFieldSelectHandler = (option: Option) => {
    dispatch(setJobFilter({ ...jobFilter, field: option.id }));
  };

  const onMajorSelectHandler = (option: Option) => {
    dispatch(setJobFilter({ ...jobFilter, major: option.id }));
  };

  const onPositionSelectHandler = (option: Option) => {
    dispatch(setJobFilter({ ...jobFilter, position: option.id }));
  };

  const onWorkModeSelectHandler = (option: Option) => {
    dispatch(setJobFilter({ ...jobFilter, workMode: option.id }));
  };

  return (
    <div className="grid grid-cols-10 gap-2 items-center bg-white">
      <div className="col-span-2">
        <SearchSelect
          small
          bold
          options={fields}
          initValue={{ id: "0", name: "Tất cả lĩnh vực" }}
          onSelect={(option: Option) => onFieldSelectHandler(option)}
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
          onSelect={(option: Option) => onMajorSelectHandler(option)}
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
          onSelect={(option: Option) => onPositionSelectHandler(option)}
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
          onSelect={(option: Option) => onWorkModeSelectHandler(option)}
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
          onSelect={(option: Option) =>
            dispatch(setJobFilter({ ...jobFilter, postType: option.id }))
          }
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
