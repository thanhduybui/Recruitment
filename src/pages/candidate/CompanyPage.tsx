import { SearchInput } from "@components/form";
import { TextHeading } from "@components/heading";
import { MediumContainer } from "@components/ui";
import { CompanyCard } from "@features/company";
import { CompanyCardProps } from "@features/company/components/CompanyCard";
import { Divider, Pagination } from "@mui/material";
import Button from "@mui/material/Button";
import api from "@utils/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CompanyPage() {
  const [companies, setCompanies] = useState<CompanyCardProps[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await api.get("/companies");
        setCompanies(res.data.data.companies.listData);
        setTotalPages(res.data.data.companies.totalPages);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCompanies();
  }, []);
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
          <div className="grid grid-cols-3 gap-4 mt-4">
            {companies.map((company) => (
              <Link to={`${company.id}`} key={company.id}>
                <CompanyCard name={company?.name} image={company.image} />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Pagination
            count={totalPages}
            shape="rounded"
            color="primary"
          ></Pagination>
        </div>
      </div>
    </MediumContainer>
  );
}
