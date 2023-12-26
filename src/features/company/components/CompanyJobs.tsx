import { TextHeading } from "@components/heading";
import { CompanySectionContainer } from "..";
import { NormalSelect, SearchInput } from "@components/form";
import { locations } from "@data/api";
import { Button, Divider } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { FindJobMainSection } from "@features/job";

export default function CompanyJobs() {
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
      <FindJobMainSection />
    </CompanySectionContainer>
  );
}
