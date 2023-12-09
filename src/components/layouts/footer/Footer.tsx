import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "@assets/img/jobhunt_logo.png";
import { FooterList, FooterLinkListItem, FooterTextListItem } from ".";

const infomation = ["Trang chủ", "Việc làm", "Doanh nghiệp", "Bài viết"];
const cvSetting = [
  "Quản lý CV",
  "Hướng dẫn viết CV",
  "Quản lý profile CV",
  "CV mẫu",
];
const contactInfo = [
  "Địa chỉ: Số 1 Võ Văn Ngân",
  "Email: jobhunt.24h@btd.com",
  "Phone: +84 383314133",
];

type FooterProps = {
  fixed?: boolean;
};

export default function Footer(props: FooterProps) {
  return (
    <footer
      className={`bg-white h-56 ${
        props.fixed ? "absolute bottom-0 left-0 right-0" : ""
      }`}
    >
      <Container>
        <div className="flex flex-col p-4 pt-6">
          <div className="flex mb-4">
            <div className="w-1/4 flex-none">
              <div className="w-fit">
                <Link to="/home">
                  <div className="flex items-start  w-40 h-fit bg-white">
                    <img
                      src={logo}
                      alt="ThanhDuy"
                      className="max-w-full max-h-full"
                    />
                  </div>
                </Link>
                <p className="text-gray-200 font-semibold text-xs text-center">
                  Copyright © 2023
                </p>
              </div>
            </div>
            <div className="w-1/4 flex-1">
              <FooterList name="Thông tin">
                {infomation.map((item) => (
                  <FooterLinkListItem key={item} content={item} />
                ))}
              </FooterList>
            </div>
            <div className="w-1/4 flex-1">
              <FooterList name="Tiện ích CV">
                {cvSetting.map((item) => (
                  <FooterLinkListItem key={item} content={item} />
                ))}
              </FooterList>
            </div>
            <div className="w-1/4 flex-1">
              <FooterList name="Liên hệ">
                {contactInfo.map((item) => (
                  <FooterTextListItem key={item} content={item} />
                ))}
              </FooterList>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
