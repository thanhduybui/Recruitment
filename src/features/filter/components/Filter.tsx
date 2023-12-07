import { AdvancedFilter, BasicFilter } from "..";
import { useState } from "react";
import Button from "@mui/material/Button";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
export default function Filter() {
  const [advancedFilterOpen, setAdvancedFilterOpen] = useState(false);
  const onOpenFilterHandler = (value: boolean) => {
    setAdvancedFilterOpen(value);
  };

  return (
    <div>
      <BasicFilter />
      <div className="grid grid-cols-10 gap-2 items-center mb-4">
        <div className="col-span-2 col-end-11 justify-self-end">
          <Button
            onClick={() => onOpenFilterHandler(!advancedFilterOpen)}
            variant="outlined"
            size="small"
            sx={{ textTransform: "none" }}
          >
            <FilterAltOutlinedIcon color="primary" />
            <span className="text-primary-600">Lọc nâng cao</span>
          </Button>
        </div>
      </div>
      {advancedFilterOpen && <AdvancedFilter />}
    </div>
  );
}
