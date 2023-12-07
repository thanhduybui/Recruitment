import { AdvancedFilter, BasicFilter } from "..";
import { useState } from "react";
import Button from "@mui/material/Button";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterAltOffOutlinedIcon from "@mui/icons-material/FilterAltOffOutlined";
import Typography from "@mui/material/Typography";

export default function Filter() {
  const [advancedFilterOpen, setAdvancedFilterOpen] = useState(false);
  const onOpenFilterHandler = (value: boolean) => {
    setAdvancedFilterOpen(value);
  };

  return (
    <div>
      <BasicFilter />
      <div className="grid grid-cols-10 gap-2 items-center mb-4">
        <div className="col-span-4">
          <Typography variant="subtitle2" component="span">
            Tìm thấy{" "}
            <span className="text-primary-600 font-bold text-lg">50</span> việc
            làm phù hợp với yêu cầu của bạn
          </Typography>
        </div>
        <div className="col-span-2 col-end-11 justify-self-end">
          <Button
            onClick={() => onOpenFilterHandler(!advancedFilterOpen)}
            variant="outlined"
            size="small"
            sx={{ textTransform: "none" }}
          >
            {!advancedFilterOpen && <FilterAltOutlinedIcon color="primary" />}
            {!advancedFilterOpen && (
              <span className="text-primary-600">Lọc nâng cao</span>
            )}
            {advancedFilterOpen && <FilterAltOffOutlinedIcon color="primary" />}
            {advancedFilterOpen && (
              <span className="text-primary-600">Đóng lọc nâng cao</span>
            )}
          </Button>
        </div>
      </div>
      {advancedFilterOpen && <AdvancedFilter />}
    </div>
  );
}
