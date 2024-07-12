import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { NormalSelect, SearchSelect } from "@components/form";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import { postTypes } from "@data/api";
import { useRouteLoaderData } from "react-router-dom";
import { Option } from "@data/interface";
import { useDispatch, useSelector } from "react-redux";
import { setJobFilter } from "@store/filterOption";
import { RootState } from "@store";

export default function AdvancedFilter() {
  const data = useRouteLoaderData("findJob");
  const dispatch = useDispatch();
  const jobFilter = useSelector((state: RootState) => state.jobFilter);
  const { fields, workModes } = data as {
    fields: Option[];
    workModes: Option[];
  };

  const onFieldSelectHandler = (option: Option) => {
    dispatch(setJobFilter({ ...jobFilter, field: option.id }));
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
