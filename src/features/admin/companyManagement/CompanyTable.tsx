import Divider from "@mui/material/Divider";

import { CompanyDataList, CompanyFilter } from ".";

export default function CompanyTable() {
  return (
    <div className="bg-white mt-2">
      <CompanyFilter />
      <Divider sx={{ marginBottom: "2.4rem" }} />
      <CompanyDataList />
    </div>
  );
}
