import { TextHeading } from "@components/heading";
import { CompanySectionContainer } from "..";
import { NormalSelect, SearchInput } from "@components/form";
import { locations } from "@data/api";
import { Button, Divider } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { ListJobs } from "@data/interface";
import { JobCard } from "@features/job";
import Pagination from "@mui/material/Pagination";

type CompanyJobsProps = {
  jobs?: ListJobs;
};

export default function CompanyJobs({ jobs }: CompanyJobsProps) {
  return (
    <CompanySectionContainer>
      <TextHeading borderStart title="Các vị trí đang tuyển" />
      <div className="flex items-center gap-2">
        <div className="w-2/4">
          <SearchInput placeholder="Nhập tên công việc" />
        </div>
        <div className="w-1/4">
          <NormalSelect
            options={locations}
            startIcon={
              <LocationOnOutlinedIcon
                sx={{ width: "24px", height: "24px" }}
                color="primary"
              />
            }
          ></NormalSelect>
        </div>

        <div className="w-1/4">
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none" }}
            size="large"
          >
            Tìm kiếm
          </Button>
        </div>
      </div>
      <Divider></Divider>
      <>
        <div className="transiton duration-75 overflow-y-auto flex flex-col gap-3 scrollbar-hidden bg-white py-2">
          {jobs?.listData?.map((job) => (
            <JobCard
              id={job.id}
              key={job.id}
              title={job.title}
              companyLogo={job.companyImage}
              companyName={job.companyName}
              salaryRange={job.salaryRange}
              deadline={job.restAppliedDays}
              locationId={job.locationId}
              status={job.status}
              isFavorite={false}
              isHot={job.isHot}
              isSaved={false}
            />
          ))}
        </div>
        <div className="py-20 flex items-center justify-center">
          <Pagination
            count={jobs?.totalPages}
            shape="rounded"
            color="primary"
            size="medium"
          />
        </div>
      </>
    </CompanySectionContainer>
  );
}
