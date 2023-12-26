import { UserInfo } from "@components/form";
import { MainSectionContainer } from "@components/ui";
import Button from "@mui/material/Button";
import { CompanyInformation } from "..";

export default function RecruiterInfo() {
  return (
    <MainSectionContainer heading="Thông tin cá nhân">
      <div className="w-4/5 lg:w-3/4 m-auto">
        <UserInfo />
        <div className="flex items-center justify-center gap-2 mt-4">
          <Button
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none" }}
          >
            Huỷ
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none" }}
          >
            Cập nhật
          </Button>
        </div>
      </div>
      <CompanyInformation></CompanyInformation>
    </MainSectionContainer>
  );
}
