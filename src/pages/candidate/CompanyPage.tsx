import { SearchInput } from "@components/form";
import { TextHeading } from "@components/heading";
import { MediumContainer } from "@components/ui";
import { CompanyCard } from "@components/ui/card";
import { Divider, Pagination } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function CompanyPage() {
  const companyCards = Array.from({ length: 9 }, (_, i) => (
    <Link to={`${i}`} key={i}>
      <CompanyCard />
    </Link>
  ));
  return (
    <MediumContainer>
      <div className="flex flex-col bg-white rounded-md mx-4 gap-8 pb-10">
        <div className="flex items-center justify-center gap-2 pt-10">
          <div className="w-1/2">
            <SearchInput placeholder="Nhập tên công ty"></SearchInput>
          </div>
          <div>
            <Button
              size="large"
              color="primary"
              variant="contained"
              sx={{ textTransform: "none" }}
            >
              Tìm
            </Button>
          </div>
        </div>
        <Divider />
        <div className="px-4 lg:px-8">
          <TextHeading title="Top công ty" borderStart></TextHeading>
          <div className="grid grid-cols-3 gap-4 mt-4">{companyCards}</div>
        </div>
        <div className="flex items-center justify-center">
          <Pagination count={10} shape="rounded" color="primary"></Pagination>
        </div>
      </div>
    </MediumContainer>
  );
}
