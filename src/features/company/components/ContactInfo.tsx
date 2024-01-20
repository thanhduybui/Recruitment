import { TextHeading } from "@components/heading";
import { LogoInformation } from "@features/jobDetails";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";

type CompanyContactInfoProps = {
  email?: string;
  phone?: string;
  address?: string;
};

export default function ContactInfo({
  email,
  phone,
  address,
}: CompanyContactInfoProps) {
  return (
    <div className="flex flex-col gap-6 mb-5">
      <TextHeading title="Thông tin liên hệ" borderStart small />
      <LogoInformation label="Email" content={email} icon={<EmailIcon />} />
      <LogoInformation
        label="Điện thoại"
        content={phone}
        icon={<LocalPhoneIcon />}
      />
      <LogoInformation
        label="Trụ sở chính"
        content={address || "Không có thông tin"}
        icon={<PlaceIcon />}
      />
    </div>
  );
}
