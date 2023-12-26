import { Avatar, Link, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import Groups2Icon from "@mui/icons-material/Groups2";

export default function CompanyHeader() {
  return (
    <div className="flex gap-4 bg-gradient-to-r from-primary-800 to-primary-500 p-4 text-white">
      <Avatar
        src="https://cdn-new.topcv.vn/unsafe/140x/filters:format(webp)/https://static.topcv.vn/company_logos/cong-ty-co-phan-giao-duc-dao-tao-imap-viet-nam-5da97e1f22484.jpg"
        alt="company logo"
        sx={{ width: 150, height: 150 }}
      />
      <div className="flex flex-col gap-4">
        <Typography variant="h6">
          Công ty Cổ phần Giáo dục & Đào tạo IMAP Việt Nam
        </Typography>
        <div className="flex items-center gap-8">
          <div className="flex gap-2 items-center ">
            <LanguageIcon></LanguageIcon>
            <Link
              variant="body2"
              href="https://imap.edu.vn"
              sx={{ color: "#ffffff" }}
            >
              https://imap.edu.vn
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <Groups2Icon></Groups2Icon>
            <Typography variant="body2">100-499 nhân viên</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
