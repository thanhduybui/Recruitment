import { TextHeading } from "@components/heading";
import { CompanyInfoRow, InfoContainer } from "..";
import { HTMLContent } from "@features/details";
import Button from "@mui/material/Button";

export default function CompanyInformation() {
  return (
    <div className="my-8 px-2">
      <TextHeading title="Thông tin công ty" borderStart></TextHeading>
      <InfoContainer>
        <CompanyInfoRow
          label="Tên công ty"
          value="Công ty Cổ phần Giáo dục & Đào tạo IMAP Việt Nam"
        />
        <CompanyInfoRow label="Quy mô" value="1000+ nhân viên" />
        <CompanyInfoRow
          label="Địa chỉ"
          value="14 Trần Kim Xuyến, Phường Yên Hoà, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam"
        />
        <CompanyInfoRow label="Email liên hệ" value="imap2023@gmail.com" />
        <CompanyInfoRow label="Hotline" value="0123456789" />
        <CompanyInfoRow label="Địa chỉ web" value="https://imap.edu.vn" />
        <CompanyInfoRow label="Mô tả" />
        <div>
          <HTMLContent />
        </div>
      </InfoContainer>
      <div className="flex items-center justify-center gap-2 mt-8">
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "none" }}
        >
          Cập nhật
        </Button>
      </div>
    </div>
  );
}
