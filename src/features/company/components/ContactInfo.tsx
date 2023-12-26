import { TextHeading } from "@components/heading";
import { LogoInformation } from "@features/details";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6 mb-5">
      <TextHeading title="Thông tin liên hệ" borderStart small></TextHeading>
      <LogoInformation
        label="Email"
        content="imap@gmail.com"
        icon={<EmailIcon></EmailIcon>}
      />
      <LogoInformation
        label="Điện thoại"
        content="0123456789"
        icon={<LocalPhoneIcon />}
      />
      <LogoInformation
        label="Trụ sở chính"
        content="14 Trần Kim Xuyến, Phường Yên Hoà, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam"
        icon={<PlaceIcon />}
      />
    </div>
  );
}
